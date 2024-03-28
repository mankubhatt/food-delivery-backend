# Food Delivery App Backend

This is the backend for a food delivery app, built using Node.js and Sequelize, with PostgreSQL as the database. The primary focus of this backend is a dynamic pricing module to calculate the total cost of food delivery based on various factors.

## Key Features

- **Dynamic Pricing Module with REST API**: Calculates delivery costs for different types of food items across various zones based on distance and item type.
- **Database Relations**: Defines relationships between organizations, items, and pricing structures.
- **Environment Configuration**: Uses a configuration file (`config/default.json`) for managing environment-specific settings.
- **Error Handling**: Includes error handling for API requests and database operations.
- **Linting**: Follows the Airbnb JavaScript style guide for code consistency.
- **Testing**: Provides a test suite covering major functionalities and edge cases.
- **Swagger Documentation**: API endpoints are documented using Swagger.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database server running locally or accessible via network.
- `.env` file containing environment variables (or configuration files in the `config` directory if using `config`).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mankubhatt/food-delivery-backend.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd food-delivery-backend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up the database:**
   
   - Create a PostgreSQL database.
   - Update the database configuration in `config/default.json` or using environment variables.

5. **Run migrations to set up the database schema:**

   ```bash
   npm run migrate
   ```

6. **Start the server:**

   ```bash
   npm start
   ```

7. The server should now be running. You can access the API at `http://localhost:3000`.

## API Documentation

API endpoints and request/response formats are documented using Swagger. After starting the server, you can access the Swagger documentation at `http://localhost:3000/api-docs`.

## Testing

To run the test suite, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
