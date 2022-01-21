const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://richard-portfolio-ei2bptmnu-perebonilado.vercel.app'