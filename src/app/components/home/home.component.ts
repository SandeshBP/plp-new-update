import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PostService } from "src/app/Services/post.service";
import { Post } from "src/app/model/post";
import { UserRegService } from "src/app/Services/user-reg.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  toggle1: boolean = false;
  loggedUserId = localStorage.getItem("loggedUserId");
  post = {
    postedBy: "",
    post: ""
  };

  updatePost: Post;
  posts: Post[] = [];
  constructor(
    private router: Router,
    private postService: PostService,
    private userRegService: UserRegService
  ) {}

  ngOnInit() {
    if (this.loggedUserId) {
      this.display();
    } else {
      this.router.navigate(["userlogin"]);
    }
  }

  //  post it ...........................................................................
  onSubmit(post) {
    console.log(post);
    this.post.post = post;
    this.post.postedBy = localStorage.getItem("loggedUserId");
    this.postService.sendPost(this.post).subscribe(data => {});
  }
  display() {
    this.postService.getposts().subscribe(data => {
      this.posts = data;
      this.posts = this.posts.reverse();
      for (let pst of this.posts) {
        for (let cmt of pst.comments) {
          this.userRegService.getProfile(cmt.commentedBy).subscribe(data => {
            cmt.commentedBy = data.firstName +" "+ data.lastName;
          });
        }
      }
    });
  }
  like(postId) {
    this.postService.getPostById(postId).subscribe(data => {
      this.updatePost = data;
      if (this.updatePost.likes.indexOf(this.loggedUserId))
        this.updatePost.likes.push(this.loggedUserId);
      console.log(this.updatePost);
      this.postService.comment(this.updatePost, postId).subscribe(data => {
        this.display();
      });
    });
  }
  dislike(postId) {
    this.postService.getPostById(postId).subscribe(data => {
      this.updatePost = data;
      if (this.updatePost.dislikes.indexOf(this.loggedUserId))
        this.updatePost.dislikes.push(this.loggedUserId);

      this.postService.comment(this.updatePost, postId).subscribe(data => {
        this.display();
      });
    });
  }

  toggle() {
    this.toggle1 = !this.toggle1;
  }

  comment(comment, postId) {
    this.toggle1 = !this.toggle1;

    this.postService.getPostById(postId).subscribe(data => {
      this.updatePost = data;
      let cmt = {
        commentedBy: this.loggedUserId,
        comment: comment
      };
      this.updatePost.comments.push(cmt);

      this.postService.comment(this.updatePost, postId).subscribe(data => {
        this.display();
      });
    });
  }
}
