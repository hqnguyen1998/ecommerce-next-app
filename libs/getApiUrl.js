const dev = process.env.VERCEL_ENV === 'production';

const apiUrl = dev
  ? 'http://localhost:3000'
  : 'https://ecommerce-next-app-three.vercel.app';

export default apiUrl;
