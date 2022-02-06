const dev = process.env.NODE_ENV !== 'production';

const apiUrl = dev ? 'http://localhost:3000' : process.env.API_URL;

export default apiUrl;
