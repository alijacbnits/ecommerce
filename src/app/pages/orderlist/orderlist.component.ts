import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  getCartDetails:any = [];

  constructor() { }

  ngOnInit(): void {
    this.orderDetails();
    // this.loadTotal();
  }

  getOrderDetails:any = [];
  getOrderDetail:any = [];
  objIndex:any = [];
  products:any = [];
  getProductDetails:any = [];

  deliveries:any = [];
  
  orderDetails() {
      this.getOrderDetails = JSON.parse(localStorage.getItem('orderlist') || '{}');
      console.log(this.getOrderDetails);
    }
    
    productDetails() {
      this.getProductDetails = JSON.parse(localStorage.getItem('orderlist') || '{}');
      console.log(this.getProductDetails);
    }


    // For cancel order
    onCancelOrder(orderId:Number) {
     let orderDetails = this.getOrderDetails;
     let objIndex = this.getOrderDetails.findIndex(((obj:any) => obj.orderId === orderId));
     orderDetails[objIndex].status = "Cancel";
     localStorage.setItem("orderlist",JSON.stringify(orderDetails));
     console.log(this.getOrderDetails);
    }

    // Show total price
  //   total:number=0;
  //   loadTotal() {
  //   if(localStorage.getItem('orderlist')){
  //     this.getOrderDetail.products = JSON.parse(localStorage.getItem('orderlist') || '{}')
  //     this.total = this.getOrderDetail.products.reduce(function(acc:any,val:any) {
  //       return acc + (val.price * val.quantity);
  //     }, 0)
  //   }
  // }

 

    
}
