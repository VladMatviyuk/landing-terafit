import { BrowserRouter, Routes } from 'react-router-dom';
import { routes } from '../routes/routes.ts';
import { parseRoutes } from '../routes/routesParser.tsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        { parseRoutes(routes) }
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;