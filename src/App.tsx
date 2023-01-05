import "./styles/App/App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import UserDetails from "./components/pages/UserDetails";
import Root from "./components/pages/Root";
import { fetchSingleUser, fetchUsers } from "./services/api";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} loader={fetchUsers} />
        <Route
          path="/user-details/:id"
          element={<UserDetails />}
          loader={({ params }) => fetchSingleUser(params.id as string)}
        />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
