import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../User.module';
import {userList} from '../User.module'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User |undefined>;
    public currentUser: Observable<User | undefined>;

    constructor() {
        var v = localStorage.getItem('currentUser');
        this.currentUserSubject = new BehaviorSubject<User |undefined>( v != null? JSON.parse(v): undefined );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | undefined {
        return this.currentUserSubject.value ;
    }

     login(username: string, password: string) :Observable<User | undefined>{
        
        var CurrentUser = userList.find( x=> x.email == username && x.password == password
            );
        if(this.currentUser)
        {
                localStorage.setItem('currentUser', JSON.stringify(CurrentUser));
                this.currentUserSubject.next(CurrentUser);
                
        }
        return this.currentUser ;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(undefined);
    }
    findUserDetail(id:number):Observable<User |undefined>
    {
        var CurrentUserDetail = userList.find( x=> x.id == id
            );
        if(this.currentUser)
        {
                localStorage.setItem('currentUserDetail', JSON.stringify(CurrentUserDetail));
                this.currentUserSubject.next(CurrentUserDetail);
                
        }
        return this.currentUser ;
    }
}