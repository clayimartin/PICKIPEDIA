import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-list',
    templateUrl: "./event-list.component.html"
})

export class EventListComponent {

    @Input() something:any;
    @Output() eventClick = new EventEmitter;


    onClickFN() {
        console.log( "click from event list component");
        this.eventClick.emit( this.something.name);
    }

    logFoo(){
        console.log("fooooooo")
      }
    

}