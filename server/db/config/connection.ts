import { Sequelize } from 'sequelize';

const {
  NODE_ENV, DATABASE_URL, DEV_DATABASE_URL, TEST_DATABASE_URL,
} = process.env;

let url: string | undefined;

switch (NODE_ENV) {
  case 'development':
    url = DEV_DATABASE_URL;
    break;
  case 'production':
    url = DATABASE_URL;
    break;
  case 'test':
    url = TEST_DATABASE_URL;
    break;
  default:
    throw new Error('NODE_ENV is not set');
}

if (!url) throw new Error('NODE_ENV is not set');
const sequelize = new Sequelize(url);

export default sequelize;
