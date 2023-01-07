import { Product } from "./product.interface";

export class ProductResponse {
  constructor(name: string, category: string, price: number) {
    this.name = name;
    this.category = category;
    this.price = price;
  }

  name: string;
  category: string;
  price: number;

  static fromDomain: (product: Product) => ProductResponse = (product: Product) => {
    return new ProductResponse(
      product.name,
      product.category,
      product.price
    );
  };
}




// class pepe {
//   constructor(a, b) { this.nombre = a}
//   nombre: string;
//   apellido: string;
//   // static isImbecil = true;

//   saludar = () => { 
//     console.log(`Hola soy ${this.nombre} ${this.apellido}`);
//   }

//   static sosTarado = () => true;
// }

// // const a = new pepe('pepe', 'ramirez');
// // pepe
// // a.saludar()

// pepe.sosTarado();