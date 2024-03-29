export interface adviserType {
  title?: string;
  type?: string;
  meterage?: string | number | null;
  location?: string;
  price_meter?: string;
  total_price?: string;
  description?: string;
  category?: 0 | 1 | 2;
  documentType?: 0 | 1 | 2;
  status?: 0 | 1 | 2 | 3 | 4 | 5;
  registerDate?: string;
  lat?: string;
  long?: string;
  id?: number;
  userId?: number;
  price?: number | string | null;
  shamim?: string;
  images?: any;
  is_selled?: boolean;
}
