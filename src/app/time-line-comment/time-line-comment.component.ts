import { Component, OnInit } from '@angular/core';
import { SendService } from '../send.service'
import {FirebaseService} from "../firebase.service"
import { Blog } from '../blog'
import { Comment } from '../comment'
@Component({
  selector: 'app-time-line-comment',
  templateUrl: './time-line-comment.component.html',
  styleUrls: ['./time-line-comment.component.css']
})
export class TimeLineCommentComponent implements OnInit {

  blog: Blog;
  comments: Comment[];

  constructor(
    private firebaseService:FirebaseService,
    private sendService: SendService

  ) { 
    this.blog = this.sendService.getCurrentBlog();
  }

  ngOnInit() {
    this.firebaseService.getComments().subscribe(val => {
      var j:number = 0;
      var k:number = 0;
      for(var i:number = 0; i<val.length; i++){
        if(val[i].idBlog == this.blog.id){
          j = j+1;
       }
      }
      this.comments = new Array<Comment>(j);
      for(var i:number = 0; i<val.length; i++){
        if(val[i].idBlog == this.blog.id){
          this.comments[k] = val[i]
          k = k+1;
       }
      }
    })
  //this.comments = comment

  }


}