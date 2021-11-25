import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about'); //default way to route
  this.route('contact', { path: '/getting-in-touch' }); //custom way to route if clients reqd legacy link
});
