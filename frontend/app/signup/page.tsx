"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import api from '../../utils/api';
import { setToken } from '../../utils/auth';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2rem auto;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background: #0070f3;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background: #005bb5;
  }
`;

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/signup', { email, password });
      setToken(response.data.token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default Signup;
