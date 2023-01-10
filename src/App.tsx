import "./styles/App/App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserDetails from "./components/pages/UserDetailsPage";
import Root from "./components/pages/Root";
import { fetchSingleUser, fetchUsers } from "./services/api";
import DashboardErrorPage from "./components/pages/DashboardErrorPage";
import UserDetailErrorPage from "./components/pages/UserDetailErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<DashboardPage />}
          loader={fetchUsers}
          errorElement={<DashboardErrorPage />}
        />
        <Route
          path="/user-details/:id"
          element={<UserDetails />}
          loader={({ params }) => fetchSingleUser(params.id as string)}
          // errorElement={<UserDetailErrorPage />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
