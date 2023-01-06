import "../styles/SideBarItem/SideBarItem.css";

interface SideBarItemProps {
  title: string;
  icon: string;
  active?: boolean;
}
const SideBarItem = (props: SideBarItemProps) => {
  return (
    <div className={`container ${props.active ? "active" : ""}`}>
      <img src={props.icon} alt={`${props.icon} icon`} className="image" />
      <p className="title">{props.title}</p>
    </div>
  );
};

export default SideBarItem;
