import { Injectable } from '@angular/core';
import {IProduct}     from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _id: number = 1;
  list: Array<IProduct> = new Array<IProduct>();

  constructor() {
    let iphone = {
      id: null,
      name: 'IPhone',
      description: 'Điện thoại Iphone'
    }
    this.save(iphone);

    let nokia = {
      id: null,
      name: 'Nokia',
      description: 'Điện thoại Nokia'
    }
    this.save(nokia);
  }

  save(product: IProduct): IProduct {
    if (!product.id){
      product.id = this._id++;
      this.list.push(product);
    }
    return product
  }

  findById(id: number): IProduct {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == id) {
        return this.list[i];
      }
    }
    return null;
  }

  deleteById(id: number): IProduct {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == id) {
        this.list.splice(i, 1);
        return this.list[i];
      }
    }
    return null;
  }

  getAllProducts(): Array<IProduct> {
    return this.list;
  }
}
