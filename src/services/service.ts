import { IProduct } from "../types/types";
export class Service {
  async getResource(url: string) {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Error! Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
  }

  getAllProducts() {
    return this.getResource('https://shop-app-f89ad-default-rtdb.firebaseio.com/products.json');
  }
  getProductById(id: number) {
    return this.getResource(`https://shop-app-f89ad-default-rtdb.firebaseio.com/products/${id}.json`);
  }
}

export function sortDataByPrice(data: IProduct[], direction: string) {
  switch(direction) {
    case 'to high':
      return data.sort( (a:any, b:any) => a['price'] > b['price'] ? 1 : -1);
    case 'to low':
      return data.sort( (a:any, b:any) => a['price'] > b['price'] ? -1 : 1);
    default:
      return data;
  }

}
function byField(field:any) {
  return (a:any, b:any) => a[field] > b[field] ? 1 : -1;
}