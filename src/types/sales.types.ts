export interface SalesData {
  id: string;
  date: Date;
  revenue: number;
  quantity: number;
  region: string;
  category: string;
  salesperson: string;
}

export interface KPIMetrics {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  conversionRate: number;
}

export interface Salesperson {
  id: string;
  name: string;
  revenue: number;
  orders: number;
  trend: number; // percentage change
  avatar?: string;
}

export interface ChartDataPoint {
  date: string;
  revenue: number;
  orders: number;
}
