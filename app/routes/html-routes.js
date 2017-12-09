var htmlController = require('../controllers/html-controller.js');

module.exports = function(app) {

  // Home Page
  app.get('/', htmlController.home);

}