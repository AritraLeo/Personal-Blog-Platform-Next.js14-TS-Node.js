"use client"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../utils/api';
import { getToken, getUserId, removeToken } from '../../utils/auth';
import { useRouter } from 'next/navigation';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
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

const Dashboard: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(getUserId());
    const router = useRouter();

    useEffect(() => {
        if (!getToken()) {
            router.push('/login');
        } else {
            fetchUserPosts();
        }
    }, []);

    const fetchUserPosts = async () => {
        try {
            const response = await api.get(`/posts?author=${userId}`);
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching user posts:', error);
        }
    };

    const handleLogout = () => {
        removeToken();
        router.push('/login');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/post', { title, content });
            console.log('Response:', response.data);
            setTitle('');
            setContent('');
            fetchUserPosts();
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <Button onClick={handleLogout}>Logout</Button>
            <h2>Create a New Post</h2>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TextArea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={5}
                    required
                />
                <Button type="submit">Create Post</Button>
            </Form>
            <h2>Your Posts</h2>
            {posts.map((post: any) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
