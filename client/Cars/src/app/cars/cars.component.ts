import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {CarsData} from './cars';
import { CommonModule } from '@angular/common';
import { Input, OnChanges} from '@angular/core';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  dispModelDrpDwn = false;
  dispImage = false;	
  selectedCompany;
  existedCompanies;	
  default :"Select Company";	
  carImage;	
  Models;
  imageUrl;
  constructor(private carsService:CarsService) { }
  selectCompany(companyName:any){
	  this.dispModelDrpDwn = true;
	  this.carsService.listModels(companyName).subscribe(modelList => this.Models = modelList);
  }
  selectModel(carModels:any){
	  this.carsService.listImages(carModels).subscribe(images => this.imageUrl = images);
	  this.dispImage = true;
  }	
  ngOnInit() {
	  this.carsService.listCompanies().subscribe(companyList =>this.existedCompanies = companyList);
  }
}

