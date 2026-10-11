import dns from 'dns';
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import dotenv from 'dotenv';

dotenv.config();

for (const name of ["MONGO_URI", "JWT_SECRET"]) {
  if (!process.env[name]) {
    console.error(`Missing ${name}. Copy .env.example to .env and fill it in.`);
    process.exit(1);
  }
}

import app from './src/app.js';
import connectDB from './src/config/database.js';

connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});