const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// GARANTA QUE ESTA LINHA COMEÇA COM 'exports.register'
exports.register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'Usuário já existe.' });
    user = new User({ firstName, lastName, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.status(201).json({ msg: 'Usuário registrado com sucesso!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

// GARANTA QUE ESTA LINHA COMEÇA COM 'exports.login'

  // ... (código da função login que já está funcionando)
exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  console.log('--- Nova Tentativa de Login ---');
  console.log('Email recebido:', email);

  try {
    // 1. O usuário existe?
    const user = await User.findOne({ email });
    if (!user) {
      console.log('DEBUG: Usuário com este email não foi encontrado no banco de dados.');
      // Por segurança, a mensagem para o usuário é genérica
      return res.status(400).json({ msg: 'Credenciais inválidas.' });
    }
    console.log('DEBUG: Usuário encontrado:', user.email);

    // 2. A senha corresponde?
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('DEBUG: A senha fornecida corresponde ao hash no banco?', isMatch);
    
    if (!isMatch) {
      console.log('DEBUG: A senha está incorreta.');
      return res.status(400).json({ msg: 'Credenciais inválidas.' });
    }

    // 3. Se tudo deu certo, criar o token
    const payload = { user: { id: user.id } };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      console.log('DEBUG: Login bem-sucedido. Token gerado.');
      res.json({ token });
    });
  } catch (err) {
    console.error('ERRO GERAL NO LOGIN:', err.message);
    res.status(500).send('Erro no servidor');
  }
};