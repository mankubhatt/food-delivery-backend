import { Sequelize } from 'sequelize';
import PricingModel from './pricing.js';
import config from 'config';

const dbConfig = config.get('DB');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    username: dbConfig.USERNAME,
    password: dbConfig.PASSWORD,
    database: dbConfig.NAME,
  });

const Pricing = PricingModel(sequelize);

export { Pricing, sequelize };
