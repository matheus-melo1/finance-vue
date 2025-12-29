export interface RecurringBill {
  id: string;
  service_name: string;
  amount: number;
  due_date: string;
  logo_url?: string;
}
