export type MemberRole = "member" | "loan_officer" | "admin" | "treasurer";
export type MemberStatus = "active" | "on_hold" | "inactive";
export type LoanStatus = "pending" | "active" | "cleared";
export type ApplicationStatus = "pending" | "approved" | "rejected";
export type TransactionType = "deposit" | "loan_repayment" | "interest_credit";
export type ContributionType = "mandatory" | "voluntary";

export type Member = {
  externalId: string;
  name: string;
  email: string;
  staffId: string | null;
  role: MemberRole;
  status: MemberStatus;
  savings_balance: number;
  voluntary_savings: number;
  monthly_savings: number;
  interest_earned_ytd: number;
  mandatory_target: number;
  mandatory_actual: number;
};

export type Product = {
  externalId: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock_quantity: number;
  is_active: boolean;
  image_url: string;
};

export type Loan = {
  externalId: string;
  memberExternalId: string;
  member_name: string;
  member_email: string;
  productExternalId: string;
  product_name: string;
  product_image_url: string;
  total_loan_amount: number;
  total_repayment_amount: number;
  monthly_installment: number;
  repayment_duration_months: number;
  interest_rate: number;
  purpose: string;
  status: LoanStatus;
  amount_paid: number;
  created_at: string;
  approved_by: string | null;
  approved_at: string | null;
  next_emi_date: string | null;
};

export type Transaction = {
  externalId: string;
  memberExternalId: string;
  title: string;
  type: TransactionType;
  amount: number;
  date: string;
  reference: string;
};

export type Contribution = {
  externalId: string;
  memberExternalId: string;
  amount: number;
  type: ContributionType;
  date: string;
};

export type Settings = {
  externalId: string;
  mandatory_savings_amount: number;
  savings_interest_rate: number;
  loan_interest_rate: number;
  max_loan_multiplier: number;
  max_repayment_months: number;
};

export type Application = {
  externalId: string;
  name: string;
  email: string;
  staff_id: string;
  department: string;
  phone: string;
  monthly_savings: number;
  status: ApplicationStatus;
  submitted_at: string;
};

export type Broadcast = {
  externalId: string;
  title: string;
  body: string;
  audience: string;
  sent_at: string;
  sent_by: string;
};

export type MonthlyDisbursement = {
  externalId: string;
  month: string;
  disbursed: number;
  repaid: number;
};
