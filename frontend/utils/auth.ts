// utils/auth.ts
// export const setToken = (token: string) => {
//     localStorage.setItem('token', token);
// };

// export const getToken = () => {
//     return localStorage.getItem('token');
// };

export const removeToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
};


// utils/auth.ts
export const setToken = (token: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
    }
};

export const setUserID = (userId: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('userId', userId);
    }
}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
};


export const getUserId = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('userId');
    }
    return null;
}

