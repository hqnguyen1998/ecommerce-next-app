const dev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';

const apiUrl = dev ? 'http://localhost:3000' : process.env.VERCEL_URL;

export default apiUrl;
