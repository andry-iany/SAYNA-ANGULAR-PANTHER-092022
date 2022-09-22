import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserDetailLong } from '../e-shop.model';

const billingAddress: UserDetailLong['billingAddress'] = [
  '2 Imp. Lebouis',
  '75014 Paris',
  'France',
  '06 ** ** ** ** **',
];
const shippingAddress: UserDetailLong['shippingAddress'] = [
  'Chronopost - livraison à domicile',
  '2 Imp Lebouis',
  '75014 Paris',
  'France',
];

const paymentMethod = {
  type: 'VISA',
  number: '**** **** **** 0000',
  expiry: '03/26',
  owner: 'ALBERT DUPONTEL',
};

const userDetail = {
  billingAddress,
  paymentMethod,
  shippingAddress,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly userDetail$ = new BehaviorSubject<UserDetailLong>(userDetail);
  constructor() {}
}
