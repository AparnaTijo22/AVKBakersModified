import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: String = "";
  password: String = "";
  flag: Boolean = false;
  registeredUsers: String[] = ['Aparna', 'Raima', 'Adithyan', 'Ayushi'];
  registeredPasswords: String[] = ['123', '456', '789', '101'];

  contactForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })  

  constructor(private formbuilder: FormBuilder, private _router: Router, private shared: SharedService) { }

  message: String = "";
  

  registerUser(){
    this.userName = this.contactForm.value.username;
    this.password = this.contactForm.value.password;

    this.registeredUsers.push(this.userName);
    this.registeredPasswords.push(this.password);
  }

  onSubmit(){
    this.userName = this.contactForm.value.username;
    this.password = this.contactForm.value.password;

    for(let i=0; i<this.registeredUsers.length; i++)
      if(this.registeredUsers[i] == this.userName){
        if(this.registeredPasswords[i] == this.password) this.flag = true;
      }

      if(this.flag){
        this.message = "Hello " + this.userName + ",";
        this.shared.setMessage(this.message);
        this.contactForm.value.username = " ";
        this.contactForm.value.password = " ";
        this._router.navigateByUrl('/home');}
      else alert("Wrong credentials");
    
  }


}
