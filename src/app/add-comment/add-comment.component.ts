import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import {FirebaseService} from '../firebase.service'
import { SendService } from '../send.service'
import { Blog } from '../blog'

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

    form = new FormGroup({
    name: new FormControl(''),
    msg: new FormControl('')
  })  

  blog: Blog;

  constructor(
    private firebaseService:FirebaseService,
    private sendService: SendService
  ) { 
    this.blog = this.sendService.getCurrentBlog();
  }

  ngOnInit() {}

  onComment(){
    this.firebaseService.addComment(
      this.form.value.name,
      this.form.value.msg,
      this.blog.id
    )
  }
}