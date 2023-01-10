import "../styles/FilterModal/FilterModal.css";
import Select from "react-select";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

interface FilterModalProps {
  filterModal: any;
  setFilterModal: any;
  filterRef: any;
  //   options: any;
}
const FilterModal = (props: FilterModalProps) => {
  const { filterModal, setFilterModal, filterRef } = props;
  const data: any = useLoaderData();

  const uniqueOrgs = [...new Set(data.map((item: any) => item.orgName))];

  const options = uniqueOrgs.map((item: any) => {
    return { value: item.orgName, label: item.orgName };
  });

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
  return (
    <div className="filter-container" ref={filterRef}>
      <div className="single-filter">
        <p className="text org">Organization</p>
        <Select options={options} />
      </div>

      <div className="single-filter">
        <p className="text">Username</p>
        <input type="text" placeholder="User" className="input" />
      </div>

      <div className="single-filter">
        <p className="text">Email</p>
        <input type="text" placeholder="Email" className="input" />
      </div>

      <div className="single-filter">
        <p className="text">Date</p>
        <input type="text" placeholder="Date" className="input" />
      </div>

      <div className="single-filter">
        <p className="text">Phone Number</p>
        <input type="text" className="input" placeholder="Phone Number" />
      </div>

      <div className="single-filter">
        <p className="text org">Status</p>
        <Select options={options} />
      </div>

      <div className="filter-actions">
        <button className="reset-btn">Reset</button>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default FilterModal;
