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
    this.color = '';
    this.buttonText = '';
  }

  color: string;
  buttonText: string;
  @Input() serverInput: Server;

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66BB6A',
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
    }

  }

  toggleStatus(onlineStatus: boolean) {
    console.log(this.serverInput.name, ': ', onlineStatus);
    this.setServerStatus(!onlineStatus);
  }

}
