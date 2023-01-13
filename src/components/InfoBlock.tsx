import { useLoaderData } from "react-router-dom";
import "../styles/InfoBlock/InfoBlock.css";
import {
  noOfChildren,
  randomGender,
  randomMaritalStatus,
  randomRelationship,
} from "../utils/utils";

interface InfoBlockProps {
  gridColumns: number;
  header: string;
  last?: boolean;
}
const InfoBlock = (props: InfoBlockProps) => {
  const { gridColumns, header, last } = props;
  const data: any = useLoaderData();

  return (
    <div className={`info-block ${last ? "no-border" : ""}`}>
      <p className="secondary-title">{header}</p>

      {header === "Personal Information" && (
        <div className={`grid-container-${gridColumns}`}>
          <div className="single-info-block">
            <p className="info-block-title">Full Name</p>
            <p className="info">
              {data?.profile.firstName} {data?.profile.lastName}
            </p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Phone Number</p>
            <p className="info">{data?.phoneNumber}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Email Address</p>
            <p className="info">{data?.email}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">BVN</p>
            <p className="info">{data?.profile.bvn}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Gender</p>
            <p className="info">{randomGender}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Marital Status</p>
            <p className="info">{randomMaritalStatus}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Children</p>
            <p className="info">
              {randomMaritalStatus === "Single"
                ? "None"
                : noOfChildren === 0
                ? "None"
                : noOfChildren}
            </p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Type of Residence</p>
            <p className="info">Parent's Apartment</p>
          </div>
        </div>
      )}

      {header === "Education and Employment" && (
        <div className={`grid-container-${gridColumns}`}>
          <div className="single-info-block">
            <p className="info-block-title">Level of Education</p>
            <p className="info">{data?.education.level}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Employment Status</p>
            <p className="info">{data?.education.employmentStatus}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Sector of Employment</p>
            <p className="info">{data?.education.sector}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Duration of Employment</p>
            <p className="info">{data?.education.duration}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Office Email</p>
            <p className="info">{data?.education.officeEmail}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Monthly Income</p>
            <p className="info">
              ₦{data?.education.monthlyIncome[1]} - ₦
              {data?.education.monthlyIncome[0]}
            </p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Loan Repayment</p>
            <p className="info">₦{data?.education.loanRepayment}</p>
          </div>
        </div>
      )}

      {header === "Socials" && (
        <div className={`grid-container-${gridColumns}`}>
          <div className="single-info-block">
            <p className="info-block-title">Twitter</p>
            <p className="info">{data?.socials.twitter}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Facebook</p>
            <p className="info">{data?.socials.facebook}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Instagram</p>
            <p className="info">{data?.socials.instagram}</p>
          </div>
        </div>
      )}

      {header === "Guarantor" && (
        <div className={`grid-container-${gridColumns}`}>
          <div className="single-info-block">
            <p className="info-block-title">Full Name</p>
            <p className="info">
              {data?.guarantor.firstName} {data?.guarantor.lastName}
            </p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Phone Number</p>
            <p className="info">{data?.guarantor.phoneNumber}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Email Address</p>
            <p className="info">
              {data?.guarantor.firstName.toLowerCase()}.
              {data?.guarantor.lastName.toLowerCase()}
              @gmail.com
            </p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Relationship</p>
            <p className="info">{randomRelationship}</p>
          </div>
        </div>
      )}

      {header === "" && (
        <div className={`grid-container-${gridColumns}`}>
          <div className="single-info-block">
            <p className="info-block-title">Full Name</p>
            <p className="info">
              {data?.guarantor.firstName} {data?.guarantor.lastName}
            </p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Phone Number</p>
            <p className="info">{data?.guarantor.phoneNumber}</p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Email Address</p>
            <p className="info">
              {data?.guarantor.firstName.toLowerCase()}.
              {data?.guarantor.lastName.toLowerCase()}
              @gmail.com
            </p>
          </div>

          <div className="single-info-block">
            <p className="info-block-title">Relationship</p>
            <p className="info">{randomRelationship}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
