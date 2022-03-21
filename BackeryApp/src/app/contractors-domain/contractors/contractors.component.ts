import { RestService } from './../../server-service/rest.service';
import { Contractors } from './../Contractors-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {

  contractorList: Contractors[] = [];

  key = "";
  reverse : boolean=false;

  constructor(private restApi: RestService) { }

  ngOnInit(): void {
    this.restApi.getContractors().subscribe
    (
      (response)=>
      {
        this.contractorList = response;
      },
      (error)=>
      {
        console.log("Error load orders");
      }
    )
  }


  sortBy(key:any){

  }

}
