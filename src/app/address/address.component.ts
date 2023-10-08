import { Component, OnInit } from '@angular/core';
import { User } from '../User.module';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{
  user !: User;
  ngOnInit(): void {
    let v =  localStorage.getItem('currentUser');
    if(v!=null)
      this.user = JSON.parse(v);
       
  }
}
