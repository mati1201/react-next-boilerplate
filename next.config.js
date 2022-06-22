const path = require('path');
require('dotenv').config();

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "app/styles/main.scss";`
  },
  publicRuntimeConfig: {
    BACKEND_URL: process.env.BACKEND_URL || '',
  }
}