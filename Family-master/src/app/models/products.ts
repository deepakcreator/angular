export interface product {
    id?: string;
    Name?: string;
    Price?: number;
    type?: string;
    quantity?: number;

}

export interface Application {
  id?: string;
  Name?: string;
  commodity?: string;
  quantity?: number;
  description?: string;
  date?: Date;
  accepted_id?: string[];
  buyer_id?: string;
  buyer_type?: string;
}
