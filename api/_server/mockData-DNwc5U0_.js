const mockUser = {
  name: "Chidi Okafor",
  email: "chidi.o@run.edu.ng",
  savings_balance: 145e4,
  voluntary_savings: 32e4,
  interest_earned_ytd: 85e3,
  mandatory_target: 5e4,
  mandatory_actual: 5e4
};
const mockOfficer = {
  name: "Mr. Emmanuel Eze",
  email: "emmanuel.e@run.edu.ng"
};
const mockAdmin = {
  name: "Mrs. Adaeze",
  email: "adaeze.admin@run.edu.ng"
};
const mockMembers = [
  { id: "u1", name: "Chidi Okafor", email: "chidi.o@run.edu.ng", role: "member", status: "active", joined: "2024-03-12", savings_balance: 145e4, total_loan_balance: 1295e3, monthly_contribution: 5e4 },
  { id: "m2", name: "Sarah Bamidele", email: "sarah.b@run.edu.ng", role: "member", status: "active", joined: "2023-11-05", savings_balance: 85e4, total_loan_balance: 0, monthly_contribution: 5e4 },
  { id: "m3", name: "Dr. Johnson E.", email: "johnson.e@run.edu.ng", role: "member", status: "on_hold", joined: "2024-01-20", savings_balance: 32e4, total_loan_balance: 55e4, monthly_contribution: 3e4 },
  { id: "m4", name: "Prof. Akinwale T.", email: "akinwale.t@run.edu.ng", role: "member", status: "active", joined: "2022-09-01", savings_balance: 21e5, total_loan_balance: 0, monthly_contribution: 1e5 },
  { id: "m5", name: "Mrs. Folake Adeyemi", email: "folake.a@run.edu.ng", role: "treasurer", status: "active", joined: "2022-06-15", savings_balance: 18e5, total_loan_balance: 35e4, monthly_contribution: 75e3 },
  { id: "m6", name: "Dr. Uche Nwosu", email: "uche.n@run.edu.ng", role: "loan_officer", status: "active", joined: "2023-02-10", savings_balance: 96e4, total_loan_balance: 68e4, monthly_contribution: 5e4 },
  { id: "a1", name: "Mrs. Adaeze", email: "adaeze.admin@run.edu.ng", role: "admin", status: "active", joined: "2022-06-15", savings_balance: 0, total_loan_balance: 0, monthly_contribution: 0 }
];
const products = [
  {
    id: "p1",
    name: 'Apple MacBook Pro 14"',
    description: "M3 Pro chip, 18GB RAM, 512GB SSD. Perfect for productivity and heavy tasks.",
    category: "Electronics",
    price: 185e4,
    stock_quantity: 5,
    is_active: true,
    image_url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p2",
    name: "Sony WH-1000XM5",
    description: "Industry leading noise canceling wireless headphones.",
    category: "Electronics",
    price: 35e4,
    stock_quantity: 12,
    is_active: true,
    image_url: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p3",
    name: 'Samsung 65" QLED 4K Smart TV',
    description: "Immersive viewing experience with Quantum Dot technology.",
    category: "Household",
    price: 95e4,
    stock_quantity: 3,
    is_active: true,
    image_url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p4",
    name: "LG Double Door Refrigerator",
    description: "Energy efficient cooling with smart inverter compressor.",
    category: "Household",
    price: 68e4,
    stock_quantity: 8,
    is_active: true,
    image_url: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p5",
    name: "AirPods Max",
    description: "High-fidelity audio. Active Noise Cancellation with Transparency mode.",
    category: "Electronics",
    price: 55e4,
    stock_quantity: 0,
    is_active: true,
    image_url: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=800"
  }
];
const mockLoans = [
  {
    id: "l1",
    member_id: "u1",
    member_name: "Chidi Okafor",
    member_email: "chidi.o@run.edu.ng",
    product_id: "p1",
    product: products[0],
    quantity: 1,
    total_loan_amount: 185e4,
    total_repayment_amount: 1942500,
    monthly_installment: 161875,
    repayment_duration_months: 12,
    interest_rate: 12,
    purpose: "school_fees",
    status: "active",
    amount_paid: 647500,
    created_at: "2025-10-15T10:00:00Z",
    approved_by: "Mrs. Adaeze",
    approved_at: "2025-10-16T14:00:00Z",
    next_emi_date: "2026-05-01"
  },
  {
    id: "l2",
    member_id: "u1",
    member_name: "Chidi Okafor",
    member_email: "chidi.o@run.edu.ng",
    product_id: "p2",
    product: products[1],
    quantity: 1,
    total_loan_amount: 35e4,
    total_repayment_amount: 367500,
    monthly_installment: 61250,
    repayment_duration_months: 6,
    interest_rate: 12,
    purpose: "business",
    status: "cleared",
    amount_paid: 367500,
    created_at: "2025-01-10T14:30:00Z",
    approved_by: "Mrs. Adaeze",
    approved_at: "2025-01-11T09:00:00Z",
    next_emi_date: null
  },
  {
    id: "l3",
    member_id: "u1",
    member_name: "Chidi Okafor",
    member_email: "chidi.o@run.edu.ng",
    product_id: "p4",
    product: products[3],
    quantity: 1,
    total_loan_amount: 68e4,
    total_repayment_amount: 714e3,
    monthly_installment: 119e3,
    repayment_duration_months: 6,
    interest_rate: 12,
    purpose: "emergency",
    status: "pending",
    amount_paid: 0,
    created_at: "2026-04-05T09:15:00Z",
    approved_by: null,
    approved_at: null,
    next_emi_date: null
  },
  {
    id: "l4",
    member_id: "m2",
    member_name: "Sarah Bamidele",
    member_email: "sarah.b@run.edu.ng",
    product_id: "p3",
    product: products[2],
    quantity: 1,
    total_loan_amount: 95e4,
    total_repayment_amount: 997500,
    monthly_installment: 83125,
    repayment_duration_months: 12,
    interest_rate: 12,
    purpose: "school_fees",
    status: "pending",
    amount_paid: 0,
    created_at: "2026-04-10T11:00:00Z",
    approved_by: null,
    approved_at: null,
    next_emi_date: null
  },
  {
    id: "l5",
    member_id: "m3",
    member_name: "Dr. Johnson E.",
    member_email: "johnson.e@run.edu.ng",
    product_id: "p5",
    product: products[4],
    quantity: 1,
    total_loan_amount: 55e4,
    total_repayment_amount: 577500,
    monthly_installment: 96250,
    repayment_duration_months: 6,
    interest_rate: 12,
    purpose: "business",
    status: "active",
    amount_paid: 192500,
    created_at: "2026-02-01T08:30:00Z",
    approved_by: "Mr. Emmanuel Eze",
    approved_at: "2026-02-02T10:00:00Z",
    next_emi_date: "2026-05-01"
  }
];
const mockTransactions = [
  { id: "t1", member_id: "u1", title: "Monthly Savings Deposit", type: "deposit", amount: 5e4, date: "May 1, 2026", reference: "TXN-2026-0501" },
  { id: "t2", member_id: "u1", title: "Loan Repayment - MacBook Pro", type: "loan_repayment", amount: -161875, date: "May 1, 2026", reference: "TXN-2026-0502" },
  { id: "t3", member_id: "u1", title: "Voluntary Savings", type: "deposit", amount: 2e4, date: "Apr 25, 2026", reference: "TXN-2026-0425" },
  { id: "t4", member_id: "u1", title: "Monthly Savings Deposit", type: "deposit", amount: 5e4, date: "Apr 1, 2026", reference: "TXN-2026-0401" },
  { id: "t5", member_id: "u1", title: "Loan Repayment - MacBook Pro", type: "loan_repayment", amount: -161875, date: "Apr 1, 2026", reference: "TXN-2026-0402" },
  { id: "t6", member_id: "u1", title: "Interest Credit (Q1 2026)", type: "interest_credit", amount: 18125, date: "Mar 31, 2026", reference: "TXN-2026-0331" },
  { id: "t7", member_id: "u1", title: "Monthly Savings Deposit", type: "deposit", amount: 5e4, date: "Mar 1, 2026", reference: "TXN-2026-0301" },
  { id: "t8", member_id: "u1", title: "Loan Repayment - MacBook Pro", type: "loan_repayment", amount: -161875, date: "Mar 1, 2026", reference: "TXN-2026-0302" },
  { id: "t9", member_id: "u1", title: "Monthly Savings Deposit", type: "deposit", amount: 5e4, date: "Feb 1, 2026", reference: "TXN-2026-0201" },
  { id: "t10", member_id: "u1", title: "Loan Repayment - MacBook Pro", type: "loan_repayment", amount: -161875, date: "Feb 1, 2026", reference: "TXN-2026-0202" }
];
const mockContributions = [
  { id: "c1", member_id: "u1", amount: 5e4, type: "mandatory", date: "May 2026" },
  { id: "c2", member_id: "u1", amount: 5e4, type: "mandatory", date: "Apr 2026" },
  { id: "c3", member_id: "u1", amount: 2e4, type: "voluntary", date: "Apr 2026" },
  { id: "c4", member_id: "u1", amount: 5e4, type: "mandatory", date: "Mar 2026" },
  { id: "c5", member_id: "u1", amount: 5e4, type: "mandatory", date: "Feb 2026" },
  { id: "c6", member_id: "u1", amount: 5e4, type: "mandatory", date: "Jan 2026" }
];
const mockSettings = {
  mandatory_savings_amount: 5e4,
  savings_interest_rate: 5,
  loan_interest_rate: 12,
  max_loan_multiplier: 3,
  max_repayment_months: 12
};
const mockOverdueLoans = [
  { id: "od1", member_name: "Dr. Johnson E.", email: "johnson.e@run.edu.ng", loan_product: "AirPods Max", emi_amount: 96250, due_date: "2026-04-01", days_overdue: 12 },
  { id: "od2", member_name: "Mrs. Grace Obi", email: "grace.o@run.edu.ng", loan_product: "Samsung TV", emi_amount: 83125, due_date: "2026-03-25", days_overdue: 19 }
];
const mockApplications = [
  { id: "app1", name: "Tunde Bakare", email: "tunde.b@run.edu.ng", staff_id: "RUN-STAFF-2210", department: "Computer Science", phone: "+234 803 555 1122", monthly_savings: 5e4, status: "pending", submitted_at: "2026-04-22T09:00:00Z" },
  { id: "app2", name: "Ngozi Eze", email: "ngozi.e@run.edu.ng", staff_id: "RUN-STAFF-2231", department: "Library", phone: "+234 805 222 9090", monthly_savings: 3e4, status: "pending", submitted_at: "2026-04-25T13:30:00Z" },
  { id: "app3", name: "Ibrahim Musa", email: "ibrahim.m@run.edu.ng", staff_id: "RUN-STAFF-2240", department: "Estate Management", phone: "+234 807 100 4455", monthly_savings: 75e3, status: "pending", submitted_at: "2026-04-26T08:15:00Z" },
  { id: "app4", name: "Mary Ojo", email: "mary.o@run.edu.ng", staff_id: "RUN-STAFF-2199", department: "Bursary", phone: "+234 802 113 7766", monthly_savings: 4e4, status: "approved", submitted_at: "2026-04-10T11:00:00Z" }
];
const mockBroadcasts = [
  { id: "b1", title: "AGM 2026 — Save the Date", body: "Our Annual General Meeting holds on June 14, 2026 at the University Auditorium. All members are required to attend.", audience: "all", sent_at: "2026-04-20T10:00:00Z", sent_by: "Mrs. Adaeze" },
  { id: "b2", title: "New Loan Interest Rate", body: "Effective May 1, 2026, the loan interest rate has been adjusted to 12% per annum. Existing loans are unaffected.", audience: "members", sent_at: "2026-04-18T15:00:00Z", sent_by: "Mrs. Adaeze" },
  { id: "b3", title: "End-of-quarter dividends posted", body: "Q1 2026 interest credits have been posted to your savings balance. Log in to view your statement.", audience: "members", sent_at: "2026-03-31T17:00:00Z", sent_by: "Mrs. Adaeze" }
];
const mockMonthlyDisbursement = [
  { month: "Nov", disbursed: 18e5, repaid: 95e4 },
  { month: "Dec", disbursed: 24e5, repaid: 11e5 },
  { month: "Jan", disbursed: 15e5, repaid: 132e4 },
  { month: "Feb", disbursed: 31e5, repaid: 148e4 },
  { month: "Mar", disbursed: 22e5, repaid: 162e4 },
  { month: "Apr", disbursed: 285e4, repaid: 175e4 }
];
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount);
};
const calculateEMI = (principal, annualRate, months) => {
  const monthlyRate = annualRate / 100 / 12;
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(emi);
};
export {
  mockOfficer as a,
  mockAdmin as b,
  mockLoans as c,
  mockMembers as d,
  mockTransactions as e,
  mockContributions as f,
  mockOverdueLoans as g,
  formatCurrency as h,
  mockSettings as i,
  mockApplications as j,
  mockMonthlyDisbursement as k,
  calculateEMI as l,
  mockUser as m,
  mockBroadcasts as n,
  products as p
};
