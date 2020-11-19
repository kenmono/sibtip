import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import * as firebase from 'firebase/app'
import { Blog } from './blog'

@Injectable()
export class SendService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  currentBlog: Blog;

  addCurrentBlog(blog: Blog){
    this.currentBlog = blog;
  }

  getCurrentBlog(){
    return this.currentBlog;
  }

}