import { useState, useEffect } from 'react';
import { SalesData, KPIMetrics, Salesperson } from '@/types/sales.types';
import { Filters } from '@/types/filters.types';
import { salesApi } from '@/services/api/salesApi';

export const useSalesData = (filters: Filters) => {
  const [data, setData] = useState<SalesData[]>([]);
  const [topSalespeople, setTopSalespeople] = useState<Salesperson[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const [salesData, topPerformers] = await Promise.all([
          salesApi.getSalesData(),
          salesApi.getTopSalespeople(),
        ]);

        // Apply filters
        const filtered = salesData.filter((item) => {
          const dateMatch =
            item.date >= filters.dateRange.start && item.date <= filters.dateRange.end;
          const regionMatch = !filters.region || item.region === filters.region;
          const categoryMatch = !filters.category || item.category === filters.category;

          return dateMatch && regionMatch && categoryMatch;
        });

        setData(filtered);
        setTopSalespeople(topPerformers);
      } catch (err) {
        setError('Failed to fetch sales data. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  // Calculate KPI metrics
  const metrics: KPIMetrics = {
    totalRevenue: data.reduce((sum, item) => sum + item.revenue, 0),
    totalOrders: data.length,
    averageOrderValue: data.length > 0 
      ? data.reduce((sum, item) => sum + item.revenue, 0) / data.length 
      : 0,
    conversionRate: 68.5, // Mock conversion rate
  };

  return {
    data,
    metrics,
    topSalespeople,
    isLoading,
    error,
  };
};
