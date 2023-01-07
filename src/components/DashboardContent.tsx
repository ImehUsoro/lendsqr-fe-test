import "../styles/DashboardContent/DashboardContent.css";
import UsersInformation from "./UsersInformation";
import UsersTable from "./UsersTable";

const DashboardContent = () => {
  return (
    <div className="right-container">
      <p className="heading">Users</p>
      <UsersInformation />

      <UsersTable />
    </div>
  );
};

export default DashboardContent;
