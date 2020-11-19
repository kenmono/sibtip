import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import {FirebaseService} from "../firebase.service"
import {Blog} from "../blog"
import { Comment } from '../comment'
import { SendService } from '../send.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {

  constructor( 
    private firebaseService: FirebaseService,
    private sendService: SendService,
    private route: Router
    ){}
  
  @Input() blog: Blog;
  comments: Comment[];

  ngOnInit() {
    this.blog = {
      ...this.blog,
      date: this.timeAgo(this.blog.date.toDate())
    }

    this.firebaseService.getComments().subscribe(val => {this.comments=val;})
  }
  timeAgo(val: Date){
    const now = new Date();
    const diff =Math.abs(now.getTime()-
    val.getTime());
    const diffDay = Math.ceil(diff/(1000*3600*24));
    const diffHour = Math.ceil(diff/(1000*3600));
    const diffMinute = Math.ceil(diff/(1000*60));
    const diffSecond = Math.ceil(diff/(1000));
    if(diffSecond <60){
      return "just now."
    }
    if(diffMinute <60){
      return `${diffMinute} minute(s) ago.`
    }
   if(diffHour <24){
      return `${diffHour} Hour(s) ago.`
    }
    return `${diffDay} Day(s) ago.`
  }


del(){
  if(window.confirm("confirm")){
    this.firebaseService.deleteBlog
    (this.blog.id).then(()=>{
      alert("deleteComplete");
    })
    .catch(err=>{
      alert("deleteFailure");
    })
    }

  for(var i:number = 0; i<this.comments.length; i++){
    if(this.blog.id == this.comments[i].idBlog){
      this.firebaseService.deleteComment(this.comments[i].id)
    }
  }
}

selectBlog(blog: Blog){
    this.route.navigate(["time-line-comment"])
    this.sendService.addCurrentBlog(blog);
  }
}
