import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private logger: LogService) {}
  showFiller = false;

  someObject = {
    id: 1,
    name: 'test',
  };

  ngOnInit(): void {}

  stringToLog(x: any): void {
    this.logger.log(x);
  }

  handleEventClicked(data: any): void {
    console.log(data);
  }
}
