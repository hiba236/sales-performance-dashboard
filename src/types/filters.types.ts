export interface DateRange {
  start: Date;
  end: Date;
}

export interface Filters {
  dateRange: DateRange;
  region: string | null;
  category: string | null;
}

export const REGIONS = ['North America', 'Europe', 'Asia', 'Latin America'] as const;
export const CATEGORIES = ['Electronics', 'Clothing', 'Food', 'Books', 'Sports'] as const;
