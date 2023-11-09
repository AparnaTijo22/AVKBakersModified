import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  foodItems: String[] = ["Appam Mutta", "Chicken Tikka", "Grilled Chicken", "Kerala Parotta", "Idli Sambar", "Chicken Kiev"];
  priceArr: number[] = [80, 200, 140, 6, 20, 280];
  foodBtnID: String[] = ["appamMutta", "tikka", "grilled", "parotta", "idli", "kiev"];
  index: number = 0;
  foodID: String = '';
  
  foodList = [
    {name: "Appam Mutta", price: 80},
    {name: "Chicken Tikka", price: 200},
    {name: "Grilled Chicken", price: 140},
    {name: "Kerala Parotta", price: 6},
    {name: "Idli Sambar", price: 20},
    {name: "Chicken Kiev", price: 280},
  ]
  
  cartList: String[] = [];
  cartListPrice: number[] = [];
  totalPrice: number = 0;
  displayString: String = '';
  emptyString: String = '';
  
  constructor( private shared: SharedService ) { }
  
  ngOnInit(){
    this.cartList = this.shared.getArrayMessage();
    this.cartListPrice = this.shared.getArrayNumMessage();
    for(let i=0;i<this.cartListPrice.length;i++) this.totalPrice += this.cartListPrice[i];
    const table = document.getElementById('cartList');

    if(this.totalPrice>0){
      this.displayString = "Total Price: " + this.totalPrice;
      if(table != null) table.classList.remove('hideCart');
      this.emptyString = '';
    }
    else this.emptyString = "Oh your cart is empty!";
  }

}
