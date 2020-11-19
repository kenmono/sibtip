import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from "firebase/app";
import {Blog} from "./blog"
import {Comment} from "./comment"

@Injectable(
  {providedIn: "root"}
)
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }
  getBlogs(){
    let DocRef = this.firestore.collection<Blog>("Blog",e=>e.orderBy("date","desc"))
    return DocRef.valueChanges();
  }

  getComments(){
    let DocRef = this.firestore.collection<Comment>("Comment",e=>e.orderBy("date","desc"))
    return DocRef.valueChanges();
  }

  addBlog(n:string,message:string,t:string){
    let blog = {
      title:t,
      name:n,
      msg:message,
      date: firebase.default.firestore.Timestamp.now()}
    const ref = this.firestore.collection("Blog").add(blog);

    ref.then(newRef=>{
      const updateID={
        id: newRef.id
      };
      newRef.update(updateID);
    });
    return ref;
  }

  addComment(n:string,message:string,idB:string){
    let comment = {
      name:n,
      msg:message,
      idBlog:idB,
      date: firebase.default.firestore.Timestamp.now()}
      const ref = this.firestore.collection("Comment").add(comment);
    ref.then(newRef=>{
      const updateID={
        id: newRef.id
      };
      newRef.update(updateID);
    });
    return ref;
  }

  deleteBlog(id: string){
    return this.firestore.collection("Blog")
    .doc(id).delete();
  }
  deleteComment(id: string){
    return this.firestore.collection("Comment")
    .doc(id).delete();
  }
}