import { Component } from '@angular/core';
import { User } from '../User.module';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonDataReaderService } from '../json-data-reader.service';
import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-user-detail-component',
  templateUrl: './user-detail-component.component.html',
  styleUrls: ['./user-detail-component.component.css']
})
export class UserDetailComponentComponent {
  UserObj !:User ;
  Bdate!:string;

  disabledInput:boolean=true;
  constructor( private router:Router, private route: ActivatedRoute,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => {
      
      var abc = x;
      if(abc !=undefined)
        this.UserObj = abc
        this.Bdate= (this.UserObj.date).substr(0,10);
    }
      );
    
    console.log(this.UserObj)
    
    
  }
  cancelEdit()
  {
    this.disabledInput==true;
    console.log(this.disabledInput)
  }

  changeDisabled()
  {
    if(this.disabledInput==true)
    {
      this.disabledInput=false;
    }
    else
    {
      this.disabledInput=false;
    }
  }

  updateUser()
  {
    console.log(this.UserObj);
    // this.UserApi.EditUser(this.UserObj).subscribe(
    //   (check)=>{ console.log(check); }
    // );
  }

 

  addSequrity()
  {
    
  }

}
