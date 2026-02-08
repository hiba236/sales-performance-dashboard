import React from 'react';
import { useFilters } from '@/hooks/useFilters';
import { useSalesData } from '@/hooks/useSalesData';
import KPICard from '@/components/dashboard/KPICard';
import SalesChart from '@/components/dashboard/SalesChart';
import TeamRanking from '@/components/dashboard/TeamRanking';
import FilterPanel from '@/components/dashboard/FilterPanel';
import { formatCurrency, formatNumber } from '@/services/formatters/currencyFormatter';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const { filters, updateRegion, updateCategory } = useFilters();
  const { data, metrics, topSalespeople, isLoading, error } = useSalesData(filters);

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Error loading dashboard</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1 className={styles.title}>Sales Performance Dashboard</h1>
        <p className={styles.subtitle}>Track your team's performance in real-time</p>
      </header>

      {isLoading ? (
        <div className={styles.loading}>Loading dashboard data...</div>
      ) : (
        <>
          <div className={styles.kpiGrid}>
            <KPICard
              title="Total Revenue"
              value={formatCurrency(metrics.totalRevenue)}
              trend={12.5}
              icon="💰"
            />
            <KPICard
              title="Total Orders"
              value={formatNumber(metrics.totalOrders)}
              trend={8.2}
              icon="📦"
            />
            <KPICard
              title="Average Order Value"
              value={formatCurrency(metrics.averageOrderValue)}
              trend={-3.1}
              icon="📊"
            />
            <KPICard
              title="Conversion Rate"
              value={`${metrics.conversionRate}%`}
              trend={5.7}
              icon="🎯"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.mainContent}>
              <SalesChart data={data} />
            </div>
            
            <div className={styles.sidebar}>
              <FilterPanel
                onRegionChange={updateRegion}
                onCategoryChange={updateCategory}
                selectedRegion={filters.region}
                selectedCategory={filters.category}
              />
              <TeamRanking salespeople={topSalespeople} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
