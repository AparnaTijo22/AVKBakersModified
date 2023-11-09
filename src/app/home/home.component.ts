import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service'; 
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today = new Date();
  pipe = new DatePipe('en-US');
  ChangedFormat = this.pipe.transform(this.today, 'YYYY-MM-dd');
  message: String = '';
  cartID: String = '';

  foodItemsOriginal: String[] = ["Appam Mutta", "Chicken Tikka", "Grilled Chicken", "Kerala Parotta", "Idli Sambar", "Chicken Kiev"];
  priceArr: number[] = [80, 200, 140, 6, 20, 280];
  foodBtnID: String[] = ["appamMutta", "tikka", "grilled", "parotta", "idli", "kiev"];

  constructor( private shared: SharedService ) { }
  
  ngOnInit(){
    this.message = this.shared.getMessage();
  }

  index: number = 0;
  foodItems: String[] = []
  foodprice: number[] = []
  foodID: String = '';
  
  getVal(event : any){
    this.foodID = event.target.id;
    for(let i=0;i<this.foodItemsOriginal.length;i++) if(this.foodBtnID[i] == this.foodID) this.index = i;
    alert("Added " + this.foodItemsOriginal[this.index] + " to cart");
    this.foodItems.push(this.foodItemsOriginal[this.index]);
    this.foodprice.push(this.priceArr[this.index]);
    this.shared.setArrayMessage(this.foodItems);
    this.shared.setArrayNumMessage(this.foodprice);
  }



  

}
