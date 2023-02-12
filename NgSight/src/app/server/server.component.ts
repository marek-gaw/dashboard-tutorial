import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() {
    //TS enforces initialization. 
    // Ref: https://bobbyhadz.com/blog/typescript-interface-empty-object 
    // and https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
    this.serverInput = {} as Server;
  }

  @Input() serverInput: Server;

  ngOnInit(): void {
  }

}
