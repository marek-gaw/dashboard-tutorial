import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData: ChartData<'pie', number[], string|string[]> ={
    labels: ['Mike', 'Joe', 'Mat'],
    datasets:[
      {
        data:[350,450,120],
        backgroundColor: ['#26547c', '#ff6b6b', '$ffd166'],
        borderColor: ['#26547c', '#ff6b6b', '$ffd166']
      }
    ],
  } 
  pieChartType:ChartType = 'pie';

  ngOnInit(): void {
  }

}
