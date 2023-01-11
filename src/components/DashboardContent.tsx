import { useNavigation } from "react-router-dom";
import "../styles/DashboardContent/DashboardContent.css";
import UsersInformation from "./UsersInformation";
import UsersTable from "./UsersTable";
import BounceLoader from "react-spinners/BounceLoader";
import { dashboardMenuState } from "../atoms/dashboardMenuAtom";
import { useRecoilState } from "recoil";

const DashboardContent = () => {
  const navigation = useNavigation();
  const { state } = navigation;
  const [active, setActive] = useRecoilState(dashboardMenuState);

  if (state === "loading") {
    return (
      <div className="loader-container">
        <BounceLoader color="#39cdcc" size={"15rem"} />
      </div>
    );
  } else {
    return (
      <div className="right-container">
        {active === "Users" ? (
          <>
            <p className="heading">Users</p>
            <UsersInformation />
            <UsersTable />
          </>
        ) : (
          <div className="no-content">No Data Available to Display</div>
        )}
      </div>
    );
  }
};

export default DashboardContent;
