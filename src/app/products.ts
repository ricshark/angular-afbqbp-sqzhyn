export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  urlpage: string;
}

export const products = [
  {
    id: 1,
    name: 'SAMSUNG GALAXY A72',
    price: 799,
    description: 'SAMSUNG GALAXY A72 Black 128GB',
    urlpage: 'https://samsungbr.vtexassets.com/arquivos/ids/316946-1200-auto?width=1200&height=auto&aspect=true'
  },
  {
    id: 2,
    name: 'SAMSUNG GALAXY S10',
    price: 699,
    description: 'A great phone with one of the best cameras',
    urlpage: 'https://mobilerat.com/public/storage/uploads/mobiles/samsung/samsung-galaxy-a10_193658.webp'
  },
  {
    id: 3,
    name: 'SAMSUNG GALAXY S21 ULTRA 5G',
    price: 1599,
    description: 'Galaxy S21 with a fast processor',
    urlpage: 'https://images.samsung.com/is/image/samsung/br-galaxy-s21-ultra-5g-g988-sm-g998bzkkzto-frontphantomblack-408577410?$PD_GALLERY_JPG$'
  },

  {
    id: 4,
    name: 'SAMSUNG GALAXY XCOVER PRO',
    price: 1700,
    description: 'The best cost-benefit',
    urlpage: 'https://images.samsung.com/is/image/samsung/br-galaxy-xcover-pro-g715-sm-g715uzksl05-frontblack-324150826?$PD_GALLERY_JPG$'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/