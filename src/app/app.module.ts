// module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from './environment';

//component 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { DisplayBlogComponent } from './display-blog/display-blog.component';
import { DisplayCommentComponent } from './display-comment/display-comment.component';
import { TimeLineCommentComponent } from './time-line-comment/time-line-comment.component';
import { TimeLineBlogComponent } from './time-line-blog/time-line-blog.component';
import { FirebaseService } from './firebase.service';
import { SharedService } from './shared.service';
import { SendService } from './send.service';
// service
@NgModule({ 
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: TimeLineBlogComponent },
      { path: "add-blog" , component: AddBlogComponent },
      { path: "time-line-comment", component: TimeLineCommentComponent}
    ]),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [  
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    AddBlogComponent, 
    AddCommentComponent, 
    DisplayBlogComponent, 
    DisplayCommentComponent, 
    TimeLineCommentComponent, 
    TimeLineBlogComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  providers: [FirebaseService, SharedService, SendService]
  
})
export class AppModule { }
