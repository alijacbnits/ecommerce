import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Userservice } from '../../services/userservice.service'

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardpageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private user: Userservice) {
    this.user.cartSubject.subscribe((data)=>{
      this.cartNumber = data;
    })
   }

  ngOnInit(): void {
    this.cartNumberFunc();
    
  }


  // cartItem:Number = 0;
  // cartItemFunc() {

  // }


  cartNumber:Number = 0;

  cartNumberFunc() {
    if(localStorage.getItem('localcart') != null){
    var cartValue = JSON.parse(localStorage.getItem('localcart')  || '{}' );
    this.cartNumber = cartValue.length;
    this.user.cartSubject.next(this.cartNumber);
    console.log(this.cartNumber);
    }
  }
  }

