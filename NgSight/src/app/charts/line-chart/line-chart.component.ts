import { Component, OnInit } from '@angular/core';
import { ChartType, ChartConfiguration } from 'chart.js';
import { LINE_CHART_SAMPLE_DATA } from '../../shared/chart.colors';


const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'March', 'Apr', 'May'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData: ChartConfiguration['data'] = {
    datasets: LINE_CHART_SAMPLE_DATA,
    labels: LINE_CHART_LABELS
  };
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions:ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {display: true}
    }
  };
  // lineChartLegend: true;
  lineChartType:ChartType = 'line';

  ngOnInit(): void {
  }

}
