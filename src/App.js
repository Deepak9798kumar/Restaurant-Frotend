import React, { Suspense, useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import About from './components/About';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Contact from './components/Contact';


const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="foote text-center ">
      <p>
        Copyright &copy; {currYear}, Made with ❤️ by <strong>Amitabh</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: " ",
    };
    setUserName(data.name)
  }, []);
  

  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        </UserContext.Provider>
      </Provider>

    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,

      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
