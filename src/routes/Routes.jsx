import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import HomePage from '../Home';
import QuizPage from '../Quiz';
import AboutPage from '../About';
import CategoriesPage from '../CategoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout as the wrapper for all routes
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/quiz/:category/:name',
        element: <QuizPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/categories',
        element: <CategoriesPage />,
      },
    ],
  },
]);

export default router;
