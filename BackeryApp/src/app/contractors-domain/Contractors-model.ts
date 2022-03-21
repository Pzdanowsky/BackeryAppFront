export class Contractors{
      [x: string]: any;

      contractor_id: number;
      company_name: string;
      nip: number;
      phone: number;
      addres: string;
      pcode:string;
      pcity:string;
      email:string;
      country: string;

      constructor(contractor_id: number, company_name: string,
        nip: number, phone: number, addres: string,
        pcode: string, pcity: string, email:string, country: string) {

        this.contractor_id = contractor_id;
        this.company_name = company_name;
        this.nip = nip;
        this.phone = phone;
        this.addres = addres;
        this.pcode = pcode;
        this.pcity = pcity;
        this.email = email;
        this.country = country;

      }

      public get getComapnyName(): any {
        return this.company_name;
      }
}
