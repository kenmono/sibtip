import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import {FirebaseService} from "../firebase.service"
import { SharedService } from "../shared.service";
import {Comment} from "../comment"
@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.css']
})
export class DisplayCommentComponent implements OnInit {

  constructor( 
    private firebaseService: FirebaseService,
    private sharedService: SharedService
    ){}

  @Input() comment: Comment;
  ngOnInit() {
        this.comment = {
      ...this.comment,
      date: this.timeAgo(this.comment.date.toDate())
    }
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
    this.firebaseService.deleteComment
    (this.comment.id).then(()=>{
      alert("deleteComplete");
    })
    .catch(err=>{
      alert("deleteFailure");
    })
    }
  }
}