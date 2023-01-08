import "../styles/UserDetailsNav/UserDetailsNav.css";

interface UserDetailsNavProps {
  title: string;
  active: string;
}
const UserDetailsNav = (props: UserDetailsNavProps) => {
  return (
    <div className="single-nav">
      <p
        className={`nav-name ${
          props.active === props.title ? "active-nav" : ""
        }`}
      >
        {props.title}
      </p>
    </div>
  );
};

export default UserDetailsNav;
