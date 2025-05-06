import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Works from "./components/Works.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about/2", element: [<Navbar />, <Hero />] },
  { path: "/works/thesis", element: <Works /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <html className="scroll-smooth" lang="en">
      <body className="bg-background">
        <RouterProvider router={router} />
      </body>
    </html>
  </StrictMode>,
);
