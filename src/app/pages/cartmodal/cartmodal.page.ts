import { Component, OnInit } from '@angular/core';
import { Product, CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cartmodal',
  templateUrl: './cartmodal.page.html',
  styleUrls: ['./cartmodal.page.scss'],
})
export class CartmodalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
  close() {
    this.modalCtrl.dismiss();
  }

  checkout(){

    return null;

  }


}
