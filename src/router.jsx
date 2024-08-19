import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Home } from "./pages/Home/Home";
import { Design } from "./pages/Design/Design";
import { About } from "./pages/About/About";
import { Locations } from "./pages/Locations/Locations";
import { Contact } from "./pages/Contact/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/home" />,
          },
          { path: "/home", element: <Home /> },
          { path: "/design/:category", element: <Design /> },
          { path: "/about", element: <About /> },
          { path: "/locations", element: <Locations /> },
          { path: "/contact", element: <Contact /> },
          { path: "*", element: <Home /> },
        ],
      },
    ],
  },
]);

// error handeling
function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="container">
        <h1>Error - Something went wrong</h1>
        {import.meta.env.MODE !== "production" && (
          <>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
          </>
        )}
      </div>
    </>
  );
}
