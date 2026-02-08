import { SalesData, Salesperson } from '@/types/sales.types';

// Mock data generator
const generateMockSalesData = (): SalesData[] => {
  const data: SalesData[] = [];
  const regions = ['North America', 'Europe', 'Asia', 'Latin America'];
  const categories = ['Electronics', 'Clothing', 'Food', 'Books', 'Sports'];
  const salespeople = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Tom Brown'];

  const now = new Date();
  for (let i = 0; i < 90; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    for (let j = 0; j < Math.floor(Math.random() * 10) + 5; j++) {
      data.push({
        id: `sale-${i}-${j}`,
        date: date,
        revenue: Math.floor(Math.random() * 5000) + 500,
        quantity: Math.floor(Math.random() * 10) + 1,
        region: regions[Math.floor(Math.random() * regions.length)],
        category: categories[Math.floor(Math.random() * categories.length)],
        salesperson: salespeople[Math.floor(Math.random() * salespeople.length)],
      });
    }
  }

  return data;
};

const mockData = generateMockSalesData();

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const salesApi = {
  getSalesData: async (): Promise<SalesData[]> => {
    await delay(800);
    return mockData;
  },

  getTopSalespeople: async (): Promise<Salesperson[]> => {
    await delay(600);
    
    const salesByPerson = mockData.reduce((acc, sale) => {
      if (!acc[sale.salesperson]) {
        acc[sale.salesperson] = { revenue: 0, orders: 0 };
      }
      acc[sale.salesperson].revenue += sale.revenue;
      acc[sale.salesperson].orders += 1;
      return acc;
    }, {} as Record<string, { revenue: number; orders: number }>);

    return Object.entries(salesByPerson)
      .map(([name, data], index) => ({
        id: `sp-${index}`,
        name,
        revenue: data.revenue,
        orders: data.orders,
        trend: Math.floor(Math.random() * 40) - 20, // -20% to +20%
      }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);
  },
};
