import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../firebase.service"
import {Blog} from '../blog'

@Component({
  selector: 'app-time-line-blog',
  templateUrl: './time-line-blog.component.html',
  styleUrls: ['./time-line-blog.component.css']
})
export class TimeLineBlogComponent implements OnInit {
  blogs: Blog[];
  constructor(
    private firebaseService:FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getBlogs().subscribe(val => {this.blogs=val;
    });
  }
}