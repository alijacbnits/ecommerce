import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  getCartDetails:any = [];

  checkForm = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
  })

  get name() {
    return this.checkForm.get('name')
  }

  get address() {
    return this.checkForm.get('address')
  }

  get phone() {
    return this.checkForm.get('phone')
  }
  constructor() { 

  }

  ngOnInit(): void {
  }

  get f()
{
    return this.checkForm.controls;
}

  submit(formvalue:any) {
    if(localStorage.getItem('localcart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localcart') || '{}');
      let totalPrice = 0;
      this.getCartDetails.map((e:any)=> {
        totalPrice = totalPrice + (e.quantity * e.price); 
      })

      let order = {
      orderId: "ORDER"+ Date.now(),
      status: "Pending",
      deliveryAddress: formvalue,
      products: this.getCartDetails,
      date: new Date(),
      orderPrice: totalPrice
    }

    if(localStorage.getItem('orderlist')) {
      let prevorder = JSON.parse(localStorage.getItem('orderlist') || '{}');
      prevorder.push(order);
      localStorage.setItem('orderlist', JSON.stringify(prevorder));
    }
    else {
      let tempArray = [];
      tempArray.push(order);
      localStorage.setItem('orderlist', JSON.stringify(tempArray));
    }
      console.log(order);

      localStorage.removeItem('localcart');
    }

    
    }

 
}
