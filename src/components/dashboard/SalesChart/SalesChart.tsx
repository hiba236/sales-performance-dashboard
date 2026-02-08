import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import Card from '@/components/common/Card';
import { SalesData } from '@/types/sales.types';
import { formatCurrency } from '@/services/formatters/currencyFormatter';
import styles from './SalesChart.module.css';

interface SalesChartProps {
  data: SalesData[];
}

const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const groupedByDate = data.reduce((acc, item) => {
      const dateKey = format(item.date, 'MMM dd');
      if (!acc[dateKey]) {
        acc[dateKey] = { date: dateKey, revenue: 0, orders: 0 };
      }
      acc[dateKey].revenue += item.revenue;
      acc[dateKey].orders += 1;
      return acc;
    }, {} as Record<string, { date: string; revenue: number; orders: number }>);

    return Object.values(groupedByDate).sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [data]);

  if (data.length === 0) {
    return (
      <Card>
        <h2 className={styles.title}>Revenue Trend</h2>
        <div className={styles.empty}>No data available for the selected period</div>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className={styles.title}>Revenue Trend</h2>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              style={{ fontSize: '0.75rem' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '0.75rem' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SalesChart;
