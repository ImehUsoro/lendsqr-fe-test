export const columns = [
  {
    Header: "Organization",
    accessor: "orgName",
  },
  {
    Header: "Username",
    accessor: "userName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Date Joined",
    accessor: "createdAt",
    disableFilters: true,
    Cell: ({ value }: any) => {
      const formattedDate = new Date(value).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      return formattedDate.split(" at ").join(" ");
    },
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "",
    accessor: "icon",
    disableFilters: true,
  },
];
