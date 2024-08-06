"use client"
import GlobalStyle from '../styles/GlobalStyle';
import Layout from '../components/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      <Layout>{children}</Layout>
    </>
  );
}
