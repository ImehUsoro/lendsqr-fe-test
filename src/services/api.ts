export const fetchUsers = async () => {
  const response = await fetch(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
  );
  const data = await response.json();
  return data;
};

export const fetchSingleUser = async (id: string) => {
  const response = await fetch(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  );
  const data = await response.json();
  return data;
};
