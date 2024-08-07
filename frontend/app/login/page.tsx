// import React from 'react';
// import LoginForm from '../../components/LoginForm';

// const LoginPage: React.FC = () => {
//   return (
//     <div>
//       <h1>Login Page</h1>
//       <LoginForm />
//     </div>
//   );
// };

// export default LoginPage;




// app/login/page.js
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import api from '@/utils/api';
// import { setToken, setUserID } from '@/utils/auth';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleSubmit = async () => {
//       if (!isSubmitting) return;

//       try {
//         const response = await api.post('/auth/login', {
//           email,
//           password,
//         });

//         if (response.data) {
//           console.log(response.data);
//           setToken(response.data.token);
//           setUserID(response.data.user_id);
//           // Redirect to dashboard or home page after successful login
//           router.push('/dashboard');
//         } else {
//           // Handle login error
//           console.error('Login failed');
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//       } finally {
//         setIsSubmitting(false);
//       }
//     };

//     handleSubmit();
//   }, [isSubmitting, email, password, router]);

//   const onSubmit = (e: any) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={onSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 p-2 w-full border rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 p-2 w-full border rounded-md"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }






"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/LoginForm'; // Adjust the import path as needed
import api from '@/utils/api';
import { setToken, setUserID } from '@/utils/auth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await api.post('/auth/login', { email, password });

      if (response.data) {
        console.log(response.data);
        setToken(response.data.token);
        setUserID(response.data.user_id);
        // Redirect to dashboard or home page after successful login
        router.push('/dashboard');

        // Redirect to dashboard or home page after successful login
        router.push('/dashboard');
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    />
  );
};

export default LoginPage;
