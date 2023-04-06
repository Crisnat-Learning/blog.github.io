import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  styleUrls: ['./blog-description.component.scss']
})
export class BlogDescriptionComponent {

  data: any;
  constructor(private dataService: DataService){ }

  ngOnInit(){
    this.data = this.dataService.getData();
  }
}
