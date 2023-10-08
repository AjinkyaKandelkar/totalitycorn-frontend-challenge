

export class User
{
    public id:number | undefined;
    public firstname:string | undefined;
    public lastname:string | undefined;
    public phone:string |undefined;
    public gender:string | undefined;
    public date:any | undefined;
    public email:string | undefined;
    public password:string | undefined;
    public state:string | undefined;
    public city:string | undefined;
    public pincode:number | undefined;
    public address:string | undefined;

    constructor(Id:number,fname:string,lname:string, pno:string, gen:string,date:any,mail:string,pass:string,state:string,city:string,pincode:number,address:string)
    {
        this.id=Id;
        this.firstname=fname;
        this.lastname=lname;
        this.phone= pno;
        this.gender=gen;
        this.date=date;
        this.email=mail;
        this.password=pass
        this.state=state;
        this.city=city;
        this.pincode=pincode;
        this.address=address;
    }

}

export const userList : User[]=[
    {   "id":1, 
        "firstname":"Ajinkya",
        "lastname":"Kandelkar",
        "gender":"male",
        "address":"Tulsi nagar,Malkapur",
        "phone": "7385086217",
        "city":"Malkapur",
        "date":"12/03/1998",
        "email":"motoX554@gmail.com",
        "password":"ajinkya@",
        "pincode":443101,
        "state":"Maharashtra"
    },
    {   "id":2, 
        "firstname":"Kajal",
        "lastname":"Taral",
        "phone": "7385086217",
        "gender":"female",
        "address":"Amruta Vihar,Pune",
        "city":"Pune",
        "date":"13/11/1998",
        "email":"kajal@gmail.com",
        "password":"kajal@",
        "pincode":411033,
        "state":"Maharashtra"
    }

];