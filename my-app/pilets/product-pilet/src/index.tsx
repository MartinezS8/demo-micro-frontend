import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-app';

const Page = React.lazy(() => import('./Products'));

export function setup(app: PiletApi) {
  app.registerPage('/products', Page);

  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/products">Products</Link>);
  app.registerTile(() => <div>Products</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
