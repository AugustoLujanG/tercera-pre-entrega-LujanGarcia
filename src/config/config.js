import { Command } from 'commander';
import dotenv from 'dotenv';

const program = new Command();
program.option('--mode <mode>', 'Modo de trabajo', 'DEVELOPMENT');
program.parse();

dotenv.config({
  path: program.opts().mode === 'DEVELOPMENT' ? './.env.development' : './.env.production',
});

export default {
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
  githubClientId: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT,
  userEmail: process.env.USER_EMAIL,
  userPassword: process.env.USER_PASSWORD,
};
