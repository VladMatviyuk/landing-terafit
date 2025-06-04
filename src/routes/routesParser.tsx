import { Route } from 'react-router-dom';
import type { IRoute } from './routes.ts';

export const parseRoutes = (routesConfig: IRoute[]) => {
  return routesConfig.map((route: IRoute, index: number) => {
    const Component = route.component;
    return (
      <Route
        key={index}
        path={route.path}
        element={<Component/>}
    />
  );
  });
};