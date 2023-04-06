import { Injectable } from '@angular/core';
import jsonData from 'src/assets/data.json';
import { BlogData } from './models/interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})  
export class DataService {

  private sharedData: any;

  data: BlogData[] = [];
  constructor(){}
  
  getData(){
    this.data = jsonData.map((item:BlogData)=>Object.assign({},item)) as BlogData[];
    return this.data;
  }


  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData() {
    return this.sharedData;
  }


}
