export class Product {
  constructor(id: string, name: string, category: string, price: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
  }

  id?: string;
  name: string;
  category: string;
  price: number;
}
