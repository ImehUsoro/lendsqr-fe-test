import "../styles/FilterModal/FilterModal.css";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import calender from "../assets/icons/calender.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecoilState } from "recoil";
import { modalFilterState } from "../atoms/dashboardMenuAtom";

interface FilterModalProps {
  filterModal: any;
  setFilterModal: any;
  filterRef: any;
}
const FilterModal = (props: FilterModalProps) => {
  const data: any = useLoaderData();
  const [startDate, setStartDate] = useState();
  const { filterModal, setFilterModal, filterRef } = props;
  const uniqueOrgs = [...new Set(data.map((item: any) => item.orgName))];
  const statuses = ["Active", "Inactive", "Pending", "Blacklisted"];
  const [formData, setFormData] = useRecoilState(modalFilterState);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        filterModal &&
        filterRef.current &&
        !filterRef.current.contains(e.target)
      ) {
        setFilterModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [filterModal]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="filter-container" ref={filterRef}>
      <div className="single-filter">
        <p className="text org">Organization</p>
        <select className="select" name="org" onChange={handleSelectChange}>
          <option value={""} className="option">
            Select
          </option>
          {uniqueOrgs.map((org: any) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className="single-filter">
        <p className="text">Username</p>
        <input
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="User"
          className="input"
        />
      </div>

      <div className="single-filter">
        <p className="text">Email</p>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          className="input"
        />
      </div>

      <div className="date">
        <p className="text">Date</p>
        <div className="date-input-container">
          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            wrapperClassName="datePicker"
            placeholderText="Date"
          />
          <img src={calender} alt={`${calender} icon`} />
        </div>
      </div>

      <div className="single-filter">
        <p className="text">Phone Number</p>
        <input
          type="text"
          className="input"
          name="phoneNumber"
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
      </div>

      <div className="single-filter">
        <p className="text org">Status</p>
        <select className="select" name="status" onChange={handleSelectChange}>
          <option value={""} className="option">
            Select
          </option>
          {statuses.map((org: any) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-actions">
        <button className="reset-btn">Reset</button>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default FilterModal;
