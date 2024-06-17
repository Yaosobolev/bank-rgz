export type Credit = {
  number: string;
  issueDate: string;
  clientId: number;
  creditExpertId: number;
  creditPurposeId: number;
  accountId: number;
} & DynamicCreditData;

export type DynamicCreditData = {
  creditAmount: number;
  usagePeriod: number;
  interestRate: number;
  monthlyPayment: number;
  id?: number;
};
