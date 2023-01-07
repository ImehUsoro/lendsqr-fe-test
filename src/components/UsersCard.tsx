import "../styles/UsersCard/UsersCard.css";

interface UsersCardProps {
  name: string;
  icon: string;
  amount: number;
}
const UsersCard = (props: UsersCardProps) => {
  return (
    <div className="users-card-container">
      <img src={props.icon} alt="" />
      <p className="name">{props.name}</p>
      <p className="amount">{props.amount.toLocaleString()}</p>
    </div>
  );
};

export default UsersCard;
