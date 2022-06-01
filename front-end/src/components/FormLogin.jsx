import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function FormLogin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          data-testid="common_login__input-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          data-testid="common_login__input-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="primary"
          type="submit"
          data-testid="common_login__button-login"
        >
          Login
        </Button>
        <Button
          variant="primary"
          type="submit"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </Button>
      </Form.Group>

    </Form>
  );
}
