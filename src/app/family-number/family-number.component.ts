import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-family-number',
  templateUrl: './family-number.component.html',
  styleUrls: ['./family-number.component.scss']
})
export class FamilyNumberComponent implements OnInit {

  constructor(private router :Router) { }

  navigateTo(router:String){
    this.router.navigate([router]);
  }

  ngOnInit(): void {
  }

}
