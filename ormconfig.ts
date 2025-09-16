import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do .env

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +(process.env.DATABASE_PORT || 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}'], // Pasta onde as migrations serão salvas
});