import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'my-app';
import MyPilet from './MyPilet';
import { MyPage, Post } from './MyPage';
// const MyPage = React.lazy(() => import('./MyPage'));

/**********************************************************************************
* The setup function receives a special object that we like to call the pilet API. 
* It is the API created specifically for the pilet. This allows the pilet to bring 
* in new functionality to the application shell (called Piral instance).
**********************************************************************************/
export function setup(app: PiletApi) {

  // https://docs.piral.io/guidelines/tutorials/04-the-pilet-api#what-about-data
  const connect = app.createConnector<Array<Post>>(
    () => new Promise(resolve =>
      setTimeout(() => resolve([{ id: 123, title: "Foo", body: "" }, { id: 234, title: "Bar", body: "" }]), 1000)
    )
  );

  app.registerPage('/page', connect(MyPage));
  app.registerPage('/my-pilet', MyPilet);

  app.registerMenu(() => <Link to="/page">My Page</Link>);
  app.registerMenu(() => <Link to="/my-pilet">My Pilet</Link>);

  app.showNotification('Hello from Piral!!!', {
    autoClose: 2000,
  });

  app.registerTile(() => <div>Welcome to My Pilet!!!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
