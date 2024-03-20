import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private router:Router){}
  Order(){
    this.router.navigate(['/login']);
  }
}