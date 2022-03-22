import { Contractors } from './../contractors-domain/Contractors-model';
export class Orders
{
  order_id: number;
  order_date: Date;
  order_ondate: Date;
  contractor: Contractors;
  ammountPaid: number;
  status: string;

       constructor(order_id: number,order_date: Date,order_ondate: Date,contractor: Contractors,ammountPaid: number,status: string){
this.order_id = order_id;
this.order_date = order_date;
this.order_ondate = order_ondate;
this.contractor = contractor;
this.ammountPaid = ammountPaid;
this.status = status;
       }


}
