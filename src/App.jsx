import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MovieDetails from "./pages/Movies/movieDetails";
import { Provider } from "react-redux";
import store from "./store/store";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Movies", element: <Movies /> },
      { path: "Register", element: <Register /> },
      { path: "Login", element: <Login /> },
      { path: ":id", element: <MovieDetails /> },
    ],
  },
]);

function App() {
 
  return (
    <RouterProvider router={routes}>
      <Provider store={store}>
        <AppLayout/>
      </Provider>
    </RouterProvider>
  );
}

export default App;
