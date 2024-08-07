import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 24rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  margin-top: 0.25rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: #3182ce;
  color: #fff;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background: #2b6cb0;
  }
  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
  }
`;

interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit, isSubmitting }: LoginFormProps) => (
  <Container>
    <FormWrapper>
      <Title>Login</Title>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </SubmitButton>
      </form>
    </FormWrapper>
  </Container>
);

export default LoginForm;
