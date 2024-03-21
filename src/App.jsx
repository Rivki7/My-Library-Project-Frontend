import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Home, HomeLayout } from './Pages';

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
