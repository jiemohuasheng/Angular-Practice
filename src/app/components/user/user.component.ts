import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;


  constructor(private dataService:DataService) {
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ogOnInit ran..');
    this.name = "Julia Zhu";
    this.age = 24;
    this.email= "example@gmail.com";
    this.address = {
      street:'20 Carluke Crescent',
      city:'North York',
      state:'ON'
    }
    this.hobbies=["Play sports", "Watch movies", "Listen to misic"];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name="Rahul Garg";
    this.hobbies.push("New hobby");
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit =!this.isEdit;
  }
}


interface Address{
 street:string,
 city:string,
 state:string
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}