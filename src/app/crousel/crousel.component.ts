import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrl: './crousel.component.css'
})
export class CrouselComponent {
  constructor(private router:Router){}
  ordernow(){
    this.router.navigate(['/login'])
  }
}
