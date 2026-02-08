import { useState } from 'react';
import { Filters } from '@/types/filters.types';

const getDefaultDateRange = () => {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 30);
  return { start, end };
};

export const useFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    dateRange: getDefaultDateRange(),
    region: null,
    category: null,
  });

  const updateDateRange = (start: Date, end: Date) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: { start, end },
    }));
  };

  const updateRegion = (region: string | null) => {
    setFilters((prev) => ({
      ...prev,
      region,
    }));
  };

  const updateCategory = (category: string | null) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };

  const resetFilters = () => {
    setFilters({
      dateRange: getDefaultDateRange(),
      region: null,
      category: null,
    });
  };

  return {
    filters,
    updateDateRange,
    updateRegion,
    updateCategory,
    resetFilters,
  };
};
