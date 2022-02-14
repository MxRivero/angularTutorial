export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Celular Samsung Grand',
    price: 799,
    description: 'Con pantalla de 7"'
  },
  {
    id: 2,
    name: 'Celulareléfono Samsung Mini',
    price: 699,
    description: 'Con pantalla de 4.5'
  },
  {
    id: 3,
    name: 'Celular Samsung A30',
    price: 299,
    description: ''
  },
  {
    id: 4,
    name: 'Celular Samsung A31',
    price: 299,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/