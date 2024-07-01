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
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { ThemeProvider } from '@mui/material/styles/';
import theme from './theme/theme';

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
        path: '/newonshelf',
        element: <NewOnShelf />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
