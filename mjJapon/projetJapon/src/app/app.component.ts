import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projetJapon';
  
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.carte()
  }

  carte() : void {
    this.router.navigate(['projetjapon']).then();
  }
}
