// Environment configuration
if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'dev') {
  // eslint-disable-next-line global-require
  require('dotenv').config({
    path: `./${process.env.NODE_ENV}.env`
  });
}

// Package imports
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const userAgent = require('express-useragent');
const bodyParser = require('body-parser');
const boom = require('@hapi/boom');
const cors = require('cors');
const requestIp = require('request-ip');
// const swaggerUi = require('swagger-ui-express');

// Local file imports
const logError = require('./system/middleware/log-error');
const errorHandler = require('./system/error/handler');
const middlewareConfig = require('./system/config/middleware');
const countryRoutes = require('./api/Country/route');
const countryCodeRoutes = require('./api/CountryCode/route');

// Initialize express app
const app = express();

// Middleware setup
app.use(userAgent.express());
app.use(cors(middlewareConfig.cors));
app.use(helmet());
app.use(morgan(middlewareConfig.morganRequestFormat));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(requestIp.mw());

// Public routes
app.get('/', (req, res) => {
  res.send({
    message: 'success'
  });
});
app.get('/api/health', (req, res) => {
  res.send('Health is A OK.');
});

// API routes
app.use('/api/country', countryRoutes);
app.use('/api/country-code', countryCodeRoutes);

// Error handling middleware
app.use(() => {
  throw boom.notFound('Endpoint Not Found');
});
app.use(logError);
app.use(errorHandler.token);
app.use(errorHandler.validation);
app.use(errorHandler.all);

module.exports = app;
