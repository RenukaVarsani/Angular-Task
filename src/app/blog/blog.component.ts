import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import {  FormGroup, FormBuilder} from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  mydata:any;
  details: FormGroup | any;

  constructor(private service: GetdataService, private http: HttpClient,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
this.details=this.formbuilder.group({
    //blogdetails 
  // this.service.getUserData().subscribe((mydata) => {
  //   this.mydata = mydata;
  // });
      title : [''],
      des : ['']

    })
  }
}


















