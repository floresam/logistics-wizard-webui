import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Home from './Home';
import CreateDemoRoute from './CreateDemo';
import DashboardRoute from './Dashboard';

export const createRoutes = (store) => ({
  path: '/',
  indexRoute: Home,
  childRoutes: [
    CreateDemoRoute(store),
    { component: CoreLayout,
      childRoutes: [
        DashboardRoute(store),
      ],
    },
  ],
});

export default createRoutes;
