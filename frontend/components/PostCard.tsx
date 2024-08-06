// components/PostCard.tsx
"use client"
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0 0 0.5rem;
`;

const Content = styled.p`
  margin: 0;
`;

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => (
  <Card>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Card>
);

export default PostCard;
