import React from 'react';
import Card from '@/components/common/Card';
import { Salesperson } from '@/types/sales.types';
import { formatCurrency, formatPercentage } from '@/services/formatters/currencyFormatter';
import styles from './TeamRanking.module.css';

interface TeamRankingProps {
  salespeople: Salesperson[];
}

const TeamRanking: React.FC<TeamRankingProps> = ({ salespeople }) => {
  return (
    <Card>
      <h2 className={styles.title}>Top Performers</h2>
      <div className={styles.list}>
        {salespeople.map((person, index) => (
          <div key={person.id} className={styles.item}>
            <div className={styles.rank}>#{index + 1}</div>
            <div className={styles.info}>
              <div className={styles.name}>{person.name}</div>
              <div className={styles.stats}>
                {person.orders} orders • {formatCurrency(person.revenue)}
              </div>
            </div>
            <div className={`${styles.trend} ${person.trend >= 0 ? styles.positive : styles.negative}`}>
              {formatPercentage(person.trend)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TeamRanking;
