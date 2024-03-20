import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddtocartComponent {
  constructor(private router:Router){}
  continueShopping(){
    this.router.navigate(['']);
  }
}