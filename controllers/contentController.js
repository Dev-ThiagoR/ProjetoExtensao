const Module = require('../models/Module');
const Lesson = require('../models/Lesson');

// Função para buscar todo o conteúdo
exports.getAllContent = async (req, res) => {
  try {
    const modules = await Module.find().sort({ order: 1 });
    const fullContent = [];

    for (const module of modules) {
      const lessons = await Lesson.find({ module: module._id }).sort({ order: 1 });
      fullContent.push({ ...module.toObject(), lessons });
    }
    res.json(fullContent);
  } catch (err) {
    res.status(500).send('Erro no servidor.');
  }
};

// ROTA TEMPORÁRIA para popular o banco de dados com dados do seu e-book.
// Chame esta rota UMA VEZ usando um cliente de API como o Postman ou Insomnia.
exports.seedContent = async (req, res) => {
  try {
    // Limpa o banco para evitar duplicatas
    await Lesson.deleteMany({});
    await Module.deleteMany({});

    // Módulo 1: HTML
    const module1 = await Module.create({
      title: "Módulo 1: HTML",
      description: "A base da programação frontend, com HTML.",
      order: 1
    });
    await Lesson.create([
      { title: "Hello World!", content: "...", module: module1._id, order: 1 },
      { title: "Aprofundando em Textos", content: "...", module: module1._id, order: 2 },
      { title: "Listas", content: "...", module: module1._id, order: 3 },
    ]);

    // Módulo 2: CSS
    const module2 = await Module.create({
      title: "Módulo 2: CSS",
      description: "Estilizando suas páginas para torná-las incríveis.",
      order: 2
    });
    await Lesson.create([
      { title: "Hello CSS", content: "...", module: module2._id, order: 1 },
      { title: "Aprofundando em Seletores", content: "...", module: module2._id, order: 2 },
      { title: "Modelo de Caixas", content: "...", module: module2._id, order: 3 },
    ]);
    
    res.status(201).send('Banco de dados populado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao popular o banco de dados.');
  }
};