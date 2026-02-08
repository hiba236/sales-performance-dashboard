import React from 'react';
import Card from '@/components/common/Card';
import styles from './KPICard.module.css';

interface KPICardProps {
  title: string;
  value: string | number;
  trend?: number;
  icon?: React.ReactNode;
  formatter?: (value: number) => string;
}

const KPICard: React.FC<KPICardProps> = ({ 
  title, 
  value, 
  trend,
  icon
}) => {
  const isPositive = trend !== undefined && trend >= 0;

  return (
    <Card className={styles.kpiCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {icon && <div className={styles.icon}>{icon}</div>}
      </div>
      
      <div className={styles.value}>{value}</div>
      
      {trend !== undefined && (
        <div className={`${styles.trend} ${isPositive ? styles.positive : styles.negative}`}>
          <span className={styles.arrow}>{isPositive ? '↑' : '↓'}</span>
          <span>{Math.abs(trend)}%</span>
          <span className={styles.label}>vs last period</span>
        </div>
      )}
    </Card>
  );
};

export default KPICard;
