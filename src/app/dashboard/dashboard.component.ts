import { Component, Injector } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  data: any;

  constructor(private router: Router,private dataService: DataService){
    this.data = new DataService().getData();
  }
}
