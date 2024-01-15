import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { AuthPage } from './pages/AuthPage';
import { ElixirPage } from './pages/ElixirPage';
import { MainPage } from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage itemsPerPage={5} />
      },
      {
        path: '/elixir/:id',
        element: <ElixirPage />
      },
      {
        path: '/auth',
        element: <AuthPage />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
