import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const Dashboard = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const { state } = navigation;
  // console.log(state);
  // console.log(data);

  if (state === "loading") {
    return <h1>Loading...</h1>;
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
