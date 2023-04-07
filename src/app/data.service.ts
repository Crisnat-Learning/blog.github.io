import { Injectable } from '@angular/core';
import jsonData from 'src/assets/data.json';
import { BlogData } from './models/interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})  
export class DataService {

  data: BlogData[] = [];
  constructor(){}
  
  getData(){
    this.data = jsonData.map((item:BlogData)=>Object.assign({},item)) as BlogData[];
    return this.data;
  }


  getIndexedData(index:any) {
    if(this.data === undefined || this.data.length === 0){
      this.getData()
    }
    for(let obj of this.data){
      console.log(obj);
      if(obj.serialNo === Number(index)){
        return obj;
      }
    }
    return undefined;
  }


}
