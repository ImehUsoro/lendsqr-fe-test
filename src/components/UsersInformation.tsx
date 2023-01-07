import "../styles/UsersInformation/UsersInformation.css";
import UsersCard from "./UsersCard";
import users from "../assets/icons/users_icon.png";
import activeUsers from "../assets/icons/active_users.png";
import usersWithLoans from "../assets/icons/users_with_loans.png";
import usersWithSavings from "../assets/icons/users_with_savings.png";
const UsersInformation = () => {
  return (
    <div className="user-information-container">
      <UsersCard name="USERS" icon={users} amount={2453} />
      <UsersCard name="ACTIVE USERS" icon={activeUsers} amount={2453} />
      <UsersCard name="USERS WITH LOANS" icon={usersWithLoans} amount={12453} />
      <UsersCard
        name="USERS WITH SAVINGS"
        icon={usersWithSavings}
        amount={102453}
      />
    </div>
  );
};

export default UsersInformation;
