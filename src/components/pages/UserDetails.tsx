import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const UserDetails = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const { state } = navigation;
  // console.log(state);
  // console.log(data);
  return <div>UserDetails</div>;
};

export default UserDetails;
