import "../styles/UserActionButton/UserActionButton.css";

interface UserActionButtonProps {
  title: string;
}

const UserActionButton = (props: UserActionButtonProps) => {
  return (
    <div className={`user-action-btn ${props.title}`}>
      {props.title === "Blacklist" ? "BLACKLIST USER" : "ACTIVATE"}
    </div>
  );
};

export default UserActionButton;
