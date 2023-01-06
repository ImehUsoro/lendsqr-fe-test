import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";

const UserDetails = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const { state } = navigation;
  // console.log(state);
  // console.log(data);
  return (
    <div>
      <Header />
      <SideBar />
    </div>
  );
};

export default UserDetails;
