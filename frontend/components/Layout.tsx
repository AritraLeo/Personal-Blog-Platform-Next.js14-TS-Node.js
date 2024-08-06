// components/Layout.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.body`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
`;

const Main = styled.main`
  padding: 1rem 0;
`;

const Footer = styled.footer`
  padding: 1rem 0;
  border-top: 1px solid #eaeaea;
  text-align: center;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <html>
    <Header>
      {/* <h1>My Blog</h1> */}
    </Header>
    <Container>
      <Main>{children}</Main>
    </Container>
    <Footer>© 2024 My Blog</Footer>
  </html>
);

export default Layout;
