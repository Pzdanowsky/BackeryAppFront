import { Orders } from './../Orders-model';
import { RestService } from './../../server-service/rest.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [DatePipe]
})
export class OrdersComponent implements OnInit {

  columnsName = ['Nr. zamowienia','Data zamowienia','Data realizacji','Kontrahent','Wartość','Status'];
  index = ['order_id','order_date','order_ondate','contractor','ammountPaid','status'];
  searchOrderList : Orders[] = [];
  orderList : Orders[] = [];
  contractorSearchName: any;
  startDate = "2022-21-03";
  stopDate = "2-22-21-03"
  key = 'id';
  reverse: boolean = false;

  constructor(private restApi: RestService) {

  }

  ngOnInit(): void {
    this.restApi.getOrders().subscribe
    (
      (response)=>
      {
        this.orderList = response;
      },
      (error)=>
      {
        console.log("Error load orders");
      }
    )
  }

  searchContractor(){

    if(this.contractorSearchName ==""){
      this.ngOnInit();
    }else{
      this.orderList = this.orderList.filter(res =>{
      return res.contractor.toLocaleLowerCase().match(this.contractorSearchName.toLocaleLowerCase());
    })
    }
  }

  searchStartDate(){

    this.orderList = this.orderList.filter(res=>{
      let temp_start = new Date(res.order_date)
      let start = new Date(this.startDate)
      return temp_start.getTime() >= start.getTime();
    })
  }

  searchStopDate(){
    this.orderList = this.orderList.filter(res =>{
      let temp_stop = new Date(res.order_date)
      let stop = new Date(this.stopDate)
      return temp_stop.getTime() <= stop.getTime();
    })
  }

  searchTodayOrders(){

  }

  searchYesteradyOrders(){

  }


  sortBy(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }




}

