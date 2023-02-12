import { Component, OnInit } from '@angular/core';
import { Server } from "../../shared/server";

const SAMPLE_SERVER = [
  { id: 1, name: 'Mia', isOnline: true},
  { id: 2, name: 'Akira', isOnline: false},
  { id: 3, name: 'Stacy', isOnline: true},
  { id: 4, name: 'Kira', isOnline: true},

]

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVER;

  ngOnInit(): void {
  }

}
