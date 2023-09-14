import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-app';
import MyPilet from './MyPilet';

const Page = React.lazy(() => import('./Page'));

/**********************************************************************************
* The setup function receives a special object that we like to call the pilet API. 
* It is the API created specifically for the pilet. This allows the pilet to bring 
* in new functionality to the application shell (called Piral instance).
**********************************************************************************/
export function setup(app: PiletApi) {
  
  app.registerPage('/page', Page);
  app.registerPage('/my-pilet', MyPilet);

  app.showNotification('Hello from Piral!!!', {
    autoClose: 2000,
  });

  app.registerMenu(() => <Link to="/page">Page</Link>);
  app.registerMenu(() => <Link to="/my-pilet">My Pilet</Link>);
  
  app.registerTile(() => <div>Welcome to My Pilet!!!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
