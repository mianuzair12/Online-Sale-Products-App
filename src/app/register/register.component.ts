import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
class Model{
  email:string='';
  password:any=null;
  user: string = '';
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private router:Router){}
user=new Model();
registerForm() { // Pass the NgForm parameter
  let mail = this.user.email; // Access email from the bound property
  let pass = this.user.password; // Access password from the bound property
  let name = this.user.user; // Access user from the bound property

  localStorage.setItem("Email", mail);
  localStorage.setItem("Password", pass);
  localStorage.setItem("Name", name);
  
  alert('You are registered successfully & Please Login!');
  
}
login(){
  this.router.navigate(['/login']);
}
}