import type { Card } from "./Card.model";
import type { RecurringBill } from "./RecurringBill.model";
import type { Transaction } from "./Transaction.model";

export interface DashboardResponse {
  balance: DashboardBalance;
  monthly_summary: DashboardMonthlySummary;
  recurring_bills: RecurringBill[];
  credit_section: DashboardCreditSection;
  recent_transactions: Transaction[];
}

export interface DashboardBalance {
  total: number;
  currency: string;
}

export interface DashboardMonthlySummary {
  income: number;
  expenses: number;
}

export interface DashboardRecurringBills {
  id: string;
  service_name: string;
  amount: number;
  due_date: string;
  logo_url?: string;
}

export interface DashboardCreditSection {
  available_limit: number;
  cards: Card[];
}
