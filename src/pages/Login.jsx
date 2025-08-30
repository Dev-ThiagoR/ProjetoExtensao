import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/authService';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      alert('Erro no login: ' + (error.response?.data?.msg || 'Tente novamente.'));
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
            <h2>Bem-vindo de volta!</h2>
            <input type="email" name="email" placeholder="Email" onChange={onChange} required />
            <input type="password" name="password" placeholder="Senha" onChange={onChange} required />
            <button type="submit">Entrar</button>
            <p className="form-link">
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;