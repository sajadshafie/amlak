export declare namespace GlobalTypes {
  interface adviserType {
    title?: string;
    type?: string;
    meterage?: string | number;
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
    price?: number | null;
    shamim?: string;
    images?: any[] | string;
    is_selled: boolean;
  }
  interface productType {
    title: string;
    city: string;
    meter: string;
    image: string;
    description: string;
    type: string;
    id: number;
    introduction_code: number;
    price: string;
    liked: boolean;
    is_selled: boolean;
  }
}
