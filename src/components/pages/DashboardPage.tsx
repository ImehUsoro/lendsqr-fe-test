import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import "../../styles/Dashboard/Dashboard.css";
import DashboardContent from "../DashboardContent";

const DashboardPage = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const { state } = navigation;
  // console.log(state);
  // console.log(data);

  if (state === "loading") {
    return <h1>Loading...</h1>;
  }
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
