import "../../styles/UserDetail/UserDetail.css";
import back from "../../assets/icons/back_button.png";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import UserActionButton from "../UserActionButton";
import { MdStarOutline, MdStar } from "react-icons/md";
import { useState } from "react";
import UserDetailsNav from "../UserDetailsNav";
import InfoBlock from "../InfoBlock";
import { randomBank } from "../../utils/utils";
import { userDetailNavState } from "../../atoms/dashboardMenuAtom";
import { useRecoilState } from "recoil";

const UserDetail = () => {
  // const [activeNav, setActiveNav] = useState("General Details");
  const [activeNav, setActiveNav] = useRecoilState(userDetailNavState);
  const navigation = useNavigation();
  const { state } = navigation;
  // const data = JSON.parse(localStorage.getItem("user") as string);
  const data: any = useLoaderData();

  if (state === "loading") {
    return (
      <div className="loader-container">
        <BounceLoader color="#39cdcc" size={"15rem"} />
      </div>
    );
  } else {
    return (
      <div className="user-detail">
        <div className="go-back">
          <Link to="/dashboard">
            <img
              src={back}
              alt="back icon"
              className="back-icon"
              onClick={() => localStorage.removeItem("user")}
            />
          </Link>
          <p className="back-text">Back to Users</p>
        </div>

        <div className="user-action">
          <p className="text">User Details</p>
          <div className="blacklist-and-activate">
            <UserActionButton title="Blacklist" />
            <UserActionButton title="Activate" />
          </div>
        </div>
        <div className="primary-information">
          <div className="user-info-display">
            <img
              src={data?.profile.avatar ? data?.profile.avatar : ""}
              alt=""
              className="user-image"
            />

            <div className="name-and-bvn">
              <p className="name">{`${data?.profile.firstName} ${data?.profile.lastName}`}</p>
              <p className="bvn">{data?.profile.bvn}</p>
            </div>

            <div className="bar"></div>

            <div className="users-tier">
              <p className="name">User's Tier</p>
              <div className="stars">
                <MdStar size={"1rem"} color="#E9B200" />
                <MdStarOutline size={"1rem"} color="#E9B200" />
                <MdStarOutline size={"1rem"} color="#E9B200" />
              </div>
            </div>

            <div className="bar"></div>

            <div className="bank-and-amount">
              <p className="amount">₦{data?.accountBalance.toLocaleString()}</p>
              <p className="bank">
                {data?.accountNumber}/{randomBank}
              </p>
            </div>
          </div>

          <div className="user-info-nav">
            <div onClick={() => setActiveNav("General Details")}>
              <UserDetailsNav title={"General Details"} active={activeNav} />
            </div>
            <div onClick={() => setActiveNav("Documents")}>
              <UserDetailsNav title={"Documents"} active={activeNav} />
            </div>

            <div onClick={() => setActiveNav("Bank Details")}>
              <UserDetailsNav title={"Bank Details"} active={activeNav} />
            </div>

            <div onClick={() => setActiveNav("Loans")}>
              <UserDetailsNav title={"Loans"} active={activeNav} />
            </div>

            <div onClick={() => setActiveNav("Savings")}>
              <UserDetailsNav title={"Savings"} active={activeNav} />
            </div>

            <div onClick={() => setActiveNav("App and Systems")}>
              <UserDetailsNav title={"App and Systems"} active={activeNav} />
            </div>
          </div>
        </div>
        {activeNav === "General Details" ? (
          <div className="secondary-information">
            <InfoBlock gridColumns={5} header="Personal Information" />
            <InfoBlock gridColumns={4} header="Education and Employment" />
            <InfoBlock gridColumns={5} header="Socials" />
            <InfoBlock gridColumns={5} header="Guarantor" />
            <InfoBlock gridColumns={5} header="" last />
          </div>
        ) : (
          <div className="no-content">No contents to display</div>
        )}
      </div>
    );
  }
};

export default UserDetail;
