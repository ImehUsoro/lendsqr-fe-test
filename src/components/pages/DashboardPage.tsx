import React, { useContext } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import "../../styles/Dashboard/Dashboard.css";
import DashboardContent from "../DashboardContent";
import { AppContext } from "../context/AppContext";
import { useQuery } from "react-query";
import { fetchUsers } from "../../services/api";

const DashboardPage = () => {
  // const data = useLoaderData();
  // const navigation = useNavigation();
  // const { state } = navigation;

  // const { data, isLoading } = useQuery("users", fetchUsers);

  // console.log(data);

  // const { active, setActive } = useContext(AppContext);
  // console.log({ active });

  return (
    <div>
      <Header />
      <div className="body">
        <SideBar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default DashboardPage;
