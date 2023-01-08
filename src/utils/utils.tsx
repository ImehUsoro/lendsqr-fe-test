const genders = ["Male", "Female", "Other"];
export const randomGender = genders[Math.floor(Math.random() * genders.length)];

const maritalStatuses = ["Single", "Married", "Divorced", "Widowed"];

export const randomMaritalStatus =
  maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)];

export const noOfChildren = Math.floor(Math.random() * 10);

const Relationship = ["Father", "Mother", "Brother", "Sister", "Other"];
export const randomRelationship =
  Relationship[Math.floor(Math.random() * Relationship.length)];

const banks = [
  "Access Bank",
  "Citibank",
  "Diamond Bank",
  "Ecobank Nigeria",
  "Fidelity Bank",
  "First Bank of Nigeria",
  "First City Monument Bank",
  "Guaranty Trust Bank",
  "Heritage Bank",
  "Keystone Bank",
  "Providus Bank",
  "Polaris Bank",
  "Stanbic IBTC Bank",
  "Standard Chartered Bank",
  "Sterling Bank",
  "Suntrust Bank",
  "Union Bank of Nigeria",
  "United Bank for Africa",
  "Unity Bank",
  "Wema Bank",
  "Zenith Bank",
];

export const randomBank = banks[Math.floor(Math.random() * banks.length)];