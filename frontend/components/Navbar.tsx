import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getToken } from '../utils/auth'; // Adjust the import path as needed

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 112, 243, 0.9);
  color: #fff;
  z-index: 1000; /* Ensures it stays above other content */
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #469df5;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #0070f3;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #ec0a0a;
    color: #fff;
  }
`;

const Navbar: React.FC = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = getToken();
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        // Perform logout logic here (e.g., clear token, etc.)
        router.push('/login');
    };

    return (
        <NavbarContainer>
            <div>
                <NavLink href="/">Home</NavLink>
                {isLoggedIn && <NavLink href="/dashboard">Dashboard</NavLink>}
            </div>
            <div>
                {!isLoggedIn ? (
                    <>
                        <NavLink href="/login">Login</NavLink>
                        <NavLink href="/signup">Signup</NavLink>
                    </>
                ) : (
                    <Button onClick={handleLogout}>Logout</Button>
                )}
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
