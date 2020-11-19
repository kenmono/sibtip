import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import {FirebaseService} from '../firebase.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    msg: new FormControl(''),
    title: new FormControl('')
  })  

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {}

  onBlog(){
    this.firebaseService.addBlog(
      this.form.value.name,
      this.form.value.msg,
      this.form.value.title
    )
    this.router.navigate(['/'])
  }
}