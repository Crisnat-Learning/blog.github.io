import { Injectable } from '@angular/core';
import data from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})  
export class DataService {

  private data: {[key: string]: string} = {};

  constructor() { }

  public getData(key: string): any {
    return this.data[key];
  }

}
