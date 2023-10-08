import { Component, OnInit } from '@angular/core';
import { User } from '../User.module';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  currentUser : User |undefined  ;
  totalitem:number=0;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        
    }
  ngOnInit(): void {
    let v = localStorage.getItem('productInfo');
    if(v!=null)
    {
      var productstoCart = JSON.parse(v);
      this.totalitem = productstoCart.length;
    }
  }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
