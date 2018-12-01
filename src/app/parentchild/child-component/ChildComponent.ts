import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './ChildComponent.html',
  styleUrls: ['./ChildComponent.css']
})
export class ChildComponent implements OnInit {

  @Input() title;
  @Output() myID = new EventEmitter();


  constructor() { }

  

  ngOnInit() {
    
  }

  onclickBtn( id ){
    this.myID.emit( id );
  }

}
