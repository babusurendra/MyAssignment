import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {

  constructor(private http : Http) { }
  listCompanies(){
  		return this.http.get('http://localhost:3000/car/api/getCompanies').map(res => res.json());
  }
	listModels(company){
  		return this.http.get('http://localhost:3000/car/api/getModels/'+company).map(res => res.json());
  }
  listImages(model){
	  return this.http.get('http://localhost:3000/car/api/getImages/'+model).map(res => res.json());
  }	
}
