
import React from 'react';
import PostCard from '../components/PostCard';
import { fetchPosts } from '../data/data';
import api from '@/utils/api';

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
}

// const Home: React.FC = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Posts />
//     </div>
//   );
// };

// export default Home;



export default async function Home() {
  const response = await api.get('/posts');
  const posts = response.data;
  console.log(posts);


  // Handle posts data
  return (
    <>
      <h1 className='text-center'>My Blog Page</h1>
      <div>
        {
          posts.map((post: Post) => (
            <PostCard key={post.id} title={post.title} content={post.content} />
          ))
        }
      </div >
    </>
  );
}


