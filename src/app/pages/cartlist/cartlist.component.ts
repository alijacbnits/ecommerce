import { Component, OnInit } from '@angular/core';
import { Userservice } from '../../services/userservice.service'


@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  constructor(private user: Userservice) { }

  ngOnInit(): void {
    this.cartDetails();
    this.loadCart();
  }

  getCartDetails:any = [];
  cartDetails() {
    if(localStorage.getItem('localcart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localcart') || '{}');
      console.log(this.getCartDetails);
    }
  }

  // Increment & Decrement quantity
  incQnt(id:number, quantity:any) {
    console.log(id);
    console.log(quantity);
    for (let i=0; i<this.getCartDetails.length; i++) {
      if(this.getCartDetails[i].id === id){
        if(quantity !=5) {
          this.getCartDetails[i].quantity = parseInt(quantity) + 1;
          }
      }
    }
    localStorage.setItem('localcart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }


  decQnt(id:number, quantity:any) {
    console.log(id);
    console.log(quantity);
    for (let i=0; i<this.getCartDetails.length; i++) {
      if(this.getCartDetails[i].id === id){
        if(quantity != 1) {
          this.getCartDetails[i].quantity = parseInt(quantity) - 1;
          }
      }
    }
    localStorage.setItem('localcart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  total:number=0;
  loadCart() {
    if(localStorage.getItem('localcart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localcart') || '{}')
      this.total = this.getCartDetails.reduce(function(acc:any,val:any) {
        return acc + (val.price * val.quantity);
      }, 0)
    }
  }

  // Remove all Items
  removeall() {
    localStorage.removeItem('localcart');
    this.getCartDetails = [];
    this.loadCart();
    this.total = 0;
    this.cartNumber = 0;
    this.user.cartSubject.next(this.cartNumber);
  }

  // Remove Single Item
  singleDelete(getCartDetail:any) {
    console.log(getCartDetail);
    if(localStorage.getItem('localcart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localcart') || '{}');
      for(let i=0; i<this.getCartDetails.length; i++) {
        if(this.getCartDetails[i].id === getCartDetail){
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localcart', JSON.stringify(this.getCartDetails));
          // this.cartDetails();
          this.loadCart();
          this.cartNumberFunc();
        }  
      }
    }
  }

  cartNumber:Number = 0;
  cartNumberFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localcart') || '{}');
    this.cartNumber = cartValue.length;
    this.user.cartSubject.next(this.cartNumber);
    console.log(this.cartNumber);
  }
}
