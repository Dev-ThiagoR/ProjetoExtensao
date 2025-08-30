import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/authService';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Cadastro realizado com sucesso! Faça o login.');
      navigate('/login');
    } catch (error) {
      alert('Erro no cadastro: ' + (error.response?.data?.msg || 'Tente novamente.'));
    }
  };

  return (
    <div className="login-page-container">
      <div className="branding-side">
        <h1>Magic Front</h1>
        <p>O guia moderno do frontend.</p>
      </div>
      <div className="form-side">
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <h2>Crie sua conta</h2>
            {/* Adicionando os novos campos */}
            <input type="text" name="firstName" placeholder="Nome" onChange={onChange} required />
            <input type="text" name="lastName" placeholder="Sobrenome" onChange={onChange} required />
            <input type="email" name="email" placeholder="Email" onChange={onChange} required />
            <input type="password" name="password" placeholder="Senha" onChange={onChange} required />
            <button type="submit">Cadastrar</button>
            <p className="form-link">
              Já tem uma conta? <Link to="/login">Faça o login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;