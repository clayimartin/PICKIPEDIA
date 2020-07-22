import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PIKIPEDIA app component';

  constructor(private router: Router) {}

  goEventList() {
    this.router.navigate(['/eventList']);
  }

  goWelcome(): void {
    this.router.navigate(['/welcome']);
  }
}
