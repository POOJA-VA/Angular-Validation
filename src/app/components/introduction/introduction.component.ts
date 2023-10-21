import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
})
export class IntroductionComponent {
  constructor(private router: Router) {}
  getStarted() {
    this.router.navigate(['/details'], { replaceUrl: true });
  }
}