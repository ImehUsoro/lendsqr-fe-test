import "../../styles/UserDetailsPage/UserDetailsPage.css";
import { useLoaderData } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import UserDetail from "./UserDetail";
import { useEffect } from "react";

const UserDetails = () => {
  const data = useLoaderData();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <Header />
      <div className="user-detail-container">
        <SideBar userDetailsPage />
        <UserDetail />
      </div>
    </div>
  );
};

export default UserDetails;
