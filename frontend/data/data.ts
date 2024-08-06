import api from "@/utils/api";

export const fetchPosts = async () => {
    const response = await api.get('/posts');
    return response.data;
};

export const createPost = async (title: string, content: string, authorId: string) => {
    const response = await api.post('/posts', { title, content, authorId });
    return response.data;
};