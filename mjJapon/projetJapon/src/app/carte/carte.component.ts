import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  constructor(private activated: ActivatedRoute,
    private router : Router) { 
      
  }
  argentTarget : number = 16000;
  currentArgent = 6077;
  distance = 9450;
  trajet = Math.round(this.currentArgent/160 * 100) / 100
  currentDistance = (9450 * this.trajet/100 ) - (9450 * this.trajet/100 ) %1;
  style = "margin-left: " + this.trajet + "%;"
  ngOnInit(): void {
    
    
  }

}
