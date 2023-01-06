import "../styles/SideBar/SideBar.css";
import briefcase from "../assets/icons/briefcase.png";
import dashboard from "../assets/icons/home.png";
import users from "../assets/icons/users.png";
import guarantors from "../assets/icons/guarantors.png";
import loans from "../assets/icons/loans.png";
import decisions from "../assets/icons/decision-models.png";
import savings from "../assets/icons/savings.png";
import requests from "../assets/icons/loan-requests.png";
import whitelist from "../assets/icons/whitelist.png";
import karma from "../assets/icons/karma.png";
import transactions from "../assets/icons/transactions.png";
import services from "../assets/icons/services.png";
import settlements from "../assets/icons/settlements.png";
import reports from "../assets/icons/reports.png";
import audit from "../assets/icons/audit.png";
import preferences from "../assets/icons/preferences.png";
import savingsProduct from "../assets/icons/savings_products.png";
import feesAndCharges from "../assets/icons/fees_and_charges.png";
import serviceAccount from "../assets/icons/service_account.png";
import feesAndPricing from "../assets/icons/fees_and_pricing.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <div className="switch-organization">
        <img src={briefcase} alt="briefcase icon" />
        <p className="text">Switch Organizations</p>
        <MdKeyboardArrowDown color="#213F7D" className="dropdown" />
      </div>

      <SideBarItem title="Dashboard" icon={dashboard} />

      <p className="title">CUSTOMERS</p>

      <div className="grouping">
        <SideBarItem title="Users" icon={users} active />
        <SideBarItem title="Guarantors" icon={guarantors} />
        <SideBarItem title="Loans" icon={loans} />
        <SideBarItem title="Decision Models" icon={decisions} />
        <SideBarItem title="Savings" icon={savings} />
        <SideBarItem title="Loan Requests" icon={requests} />
        <SideBarItem title="Whitelist" icon={whitelist} />
        <SideBarItem title="Karma" icon={karma} />
      </div>

      <p className="title">BUSINESSES</p>

      <div className="grouping">
        <SideBarItem title="Organization" icon={briefcase} />
        <SideBarItem title="Loan Products" icon={requests} />
        <SideBarItem title="Savings Products" icon={savingsProduct} />
        <SideBarItem title="Fees and Charges" icon={feesAndCharges} />
        <SideBarItem title="Transactions" icon={transactions} />
        <SideBarItem title="Services" icon={services} />
        <SideBarItem title="Service Account" icon={serviceAccount} />
        <SideBarItem title="Settlements" icon={settlements} />
        <SideBarItem title="Reports" icon={reports} />
      </div>

      <p className="title">SETTINGS</p>

      <div className="grouping">
        <SideBarItem title="Preferences" icon={preferences} />
        <SideBarItem title="Fees and Pricing" icon={feesAndPricing} />
        <SideBarItem title="Audit Logs" icon={audit} />
      </div>
    </div>
  );
};

export default SideBar;
