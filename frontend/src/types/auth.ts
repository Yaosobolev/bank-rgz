export type AuthInput = {
  username: string;
};

export type User = {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: string;
  passportNumber: string;
  passportSeries: string;
  issuedBy: string;
  issueDate: string;
  addressId: number;
};
