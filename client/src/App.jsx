import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DogsList from "./components/DogsList";
import AddNewDogForm from "./pages/AddNewDogForm";
import EditDogForm from "./pages/EditDogForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <DogsList /> },
      { path: "add", element: <AddNewDogForm /> },
      { path: "edit/:id", element: <EditDogForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
