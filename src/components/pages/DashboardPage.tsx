import Header from "../Header";
import SideBar from "../SideBar";
import "../../styles/Dashboard/Dashboard.css";
import DashboardContent from "../DashboardContent";

const DashboardPage = () => {
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
