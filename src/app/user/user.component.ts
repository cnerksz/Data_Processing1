import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserName } from '../models/userName';
import { User } from '../models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  userNames:UserName[]=[];
  listType:string="All Users";
  users:User[]=[];
  show:boolean=false;
  constructor(private _userService:UserService) {
  }
 
  ngOnInit(){
    this.users=this._userService.getUsers();
   
  }
filterList(){
  this.userNames = [];
  this.users.filter(
    f=>f.isActive==true
  ).map(
    m=>this.userNames.push({firstName:m.firstName,lastName:m.lastName})
  );
  this.listType="Active Users";
  return this.userNames;
}
cleanList(){
this.userNames=[];
this.listType="All Users";
return this.userNames;
}


    
  }
  


