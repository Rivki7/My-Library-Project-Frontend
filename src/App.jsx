import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import {
  Catalog,
  Contact,
  Events,
  Home,
  HomeLayout,
  NewOnShelf,
} from './Pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        // errorElement: <SinglePageError />,
        // loader: landingLoader,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/newBooks',
        element: <Catalog />,
      },
      {
        path: '/newonshelf',
        element: <NewOnShelf />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
