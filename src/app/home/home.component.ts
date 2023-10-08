import { Component, OnInit } from '@angular/core';
import { product } from '../product.module';
import { AuthenticationService } from '../services/Authentication.service';
import { Subscription } from 'rxjs';
import { User } from '../User.module';
import { JsonDataReaderService } from '../json-data-reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  currentUser = User as {} | undefined;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
    private authenticationService: AuthenticationService) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }
  

  Product!:product[];
  CookBooks:string="cooking"
  NovelBooks:string="novel";
  ComicBooks:string="comic";
  BioBooks:string="Bio";
  FanBooks:string="fantasy";
  HisBooks:string="history";
  HorrorBooks:string="horror";
  MystBooks:string="mystery";
  PoetBooks:string="poetry";
  RomBooks:string="romance";
  SciBooks:string="scifi";
  ThrilBooks:string="thriller";

}
