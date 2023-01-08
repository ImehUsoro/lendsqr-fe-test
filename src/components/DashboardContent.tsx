import { useNavigation } from "react-router-dom";
import "../styles/DashboardContent/DashboardContent.css";
import UsersInformation from "./UsersInformation";
import UsersTable from "./UsersTable";
import BounceLoader from "react-spinners/BounceLoader";

const DashboardContent = () => {
  const navigation = useNavigation();
  const { state } = navigation;

  if (state === "loading") {
    return (
      <div className="loader-container">
        <BounceLoader color="#39cdcc" size={"15rem"} />
      </div>
    );
  } else {
    return (
      <div className="right-container">
        <p className="heading">Users</p>
        <UsersInformation />
        <UsersTable />
      </div>
    );
  }
};

export default DashboardContent;
