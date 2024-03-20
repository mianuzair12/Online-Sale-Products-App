import { Component } from '@angular/core';
import { Router } from '@angular/router';
class Model{
  email:string='';
  password:any=null;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user=new Model();
  isLoggedIn: boolean = false;
  constructor(private router:Router){

    this.checkLoginStatus();
  }
  checkLoginStatus() {
    let mail = localStorage.getItem("Email");
    let pass = localStorage.getItem("Password");
    this.isLoggedIn = !!mail && !!pass; // Update isLoggedIn based on email and password existence
  }
  userLogin(){
    let mail = localStorage.getItem("Email");
    let pass = localStorage.getItem("Password");
    if(this.user.email == mail && this.user.password == pass){
    //   localStorage.setItem('Email', this.user.email);
    // localStorage.setItem('Password', this.user.password);
  
    this.router.navigate(['/addtocart']);
    localStorage.clear();
  
    }
 
  else{
    alert('login failed')
  }
   }
   registerform(){
    let mail = localStorage.getItem("Email");
    let pass = localStorage.getItem("Password");
    //  if (mail!=='' && pass!=='') {
    this.router.navigate(['/register']);
   }
}
