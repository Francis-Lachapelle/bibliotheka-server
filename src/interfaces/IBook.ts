export interface IBook {
  _id: string;
  name: string;
  description?: string;
  authors?: Array<string>;
  categories?: Array<string>;
}
