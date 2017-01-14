/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  //la ruta GET secret/index renderiza el método index del controlador UsersController
  'GET /secret/index': 'UsersController.index',
   
  //la ruta GET secret/get/:id renderiza el método get del controlador UsersController con un parámetro id
  'GET /secret/get/:id': 'UsersController.get',
   
  //la ruta GET secret/edit renderiza el método edit del controlador UsersController
  'GET /secret/edit': 'UsersController.edit',
   
  //la ruta POST secret/create renderiza el método create del controlador UsersController
  'POST /secret/create': 'UsersController.create',
   
  //la ruta PUT secret/update renderiza el método update del controlador UsersController
  'PUT /secret/update': 'UsersController.update',
   
  //la ruta PUT secret/policy renderiza el método policy del controlador UsersController con la policy sessionAuth
  'GET /secret/policy': {controller: "UsersController", action:"policy", "policy": 'sessionAuth'},
   
  //la ruta GET secret/notfound renderiza el archivo 404.ejs de views
  'GET /notfound': {response: 'notFound'},
   
  //la ruta GET customview renderiza el archivo users/customview.ejs de views
  'GET /customview': {view: 'users/customview'}

};
