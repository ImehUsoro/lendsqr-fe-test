import Header from "../Header";
import SideBar from "../SideBar";

const DashboardErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="error-body">
        <SideBar />
        <h2>
          Users information currently unavailable. Please check your network and
          refresh.
        </h2>
      </div>
    </div>
  );
};

export default DashboardErrorPage;
