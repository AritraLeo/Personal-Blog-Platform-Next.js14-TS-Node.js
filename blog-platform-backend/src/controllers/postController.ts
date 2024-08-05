import { Request, Response } from 'express';
import Post, { IPost } from '../models/Post';

export const createPost = async (req: any | Request, res: Response) => {
    const { title, content } = req.body;
    try {
        const newPost: IPost = new Post({
            title,
            content,
            authorId: req.user.userId,
        });
        await newPost.save();
        res.json(newPost);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

export const getPosts = async (req: Request, res: Response) => {
    const { author } = req.query;
    try {
        const query = author ? { authorId: author } : {};
        const posts = await Post.find(query).populate('authorId', 'email');
        res.json(posts);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
