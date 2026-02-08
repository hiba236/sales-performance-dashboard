import React from 'react';
import Card from '@/components/common/Card';
import { REGIONS, CATEGORIES } from '@/types/filters.types';
import styles from './FilterPanel.module.css';

interface FilterPanelProps {
  onRegionChange: (region: string | null) => void;
  onCategoryChange: (category: string | null) => void;
  selectedRegion: string | null;
  selectedCategory: string | null;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  onRegionChange,
  onCategoryChange,
  selectedRegion,
  selectedCategory,
}) => {
  return (
    <Card>
      <h2 className={styles.title}>Filters</h2>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label className={styles.label}>Region</label>
          <select 
            className={styles.select}
            value={selectedRegion || ''}
            onChange={(e) => onRegionChange(e.target.value || null)}
          >
            <option value="">All Regions</option>
            {REGIONS.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.label}>Category</label>
          <select 
            className={styles.select}
            value={selectedCategory || ''}
            onChange={(e) => onCategoryChange(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
};

export default FilterPanel;
