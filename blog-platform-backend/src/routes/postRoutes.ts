import express from 'express';
import { createPost, getPosts } from '../controllers/postController';
import authMiddleware from '../middleware/authMiddleware';
const router = express.Router();

router.post('/post', authMiddleware, createPost);
router.get('/posts', getPosts);

export default router;
