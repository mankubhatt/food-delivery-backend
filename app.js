import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { calculatePrice } from './controllers/pricingController.js';
import { validateRequest } from './middleware/validationMiddleware.js';
import { sequelize } from './models/index.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// API endpoint to calculate delivery costs
app.post('/calculate-price', validateRequest, calculatePrice);

// Swagger API documentation
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Database connection
sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to synchronize models:', err);
  });