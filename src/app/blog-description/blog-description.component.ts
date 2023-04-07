import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogData } from '../models/interfaces/blog.interface';


@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  styleUrls: ['./blog-description.component.scss']
})
export class BlogDescriptionComponent {

  data: any;
  index!: String|null;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute){ }

  ngOnInit(){
    this.route.queryParamMap.subscribe(params => {
      // Access the query parameter values
      this.index = params.get('blogNumber');
    });
    if(this.index===undefined || this.index === null){
      this.router.navigateByUrl("/")
    }
    else{
      this.data = this.dataService.getIndexedData(this.index);
      console.log(this.data);
      if(this.data===undefined){
        this.router.navigateByUrl("/")
      }
    }
  }
}
