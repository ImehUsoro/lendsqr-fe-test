import "../../styles/UserDetailsPage/UserDetailsPage.css";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import UserDetail from "./UserDetail";
import { fetchSingleUser } from "../../services/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const UserDetails = () => {
  // const data = useLoaderData();
  const navigation = useNavigation();
  const { id } = useParams();
  const { state } = navigation;

  // const { data, isLoading } = useQuery("singleUser", () =>
  //   fetchSingleUser(id as string)
  // );

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(data));
  // }, [data]);

  return (
    <div>
      <Header />
      <div className="user-detail-container">
        <SideBar userDetailsPage />
        <UserDetail  />
      </div>
    </div>
  );
};

export default UserDetails;
