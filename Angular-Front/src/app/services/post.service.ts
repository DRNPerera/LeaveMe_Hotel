import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http:Http,
    private router:Router

  ) { }

  sendPost(post){

     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post("post/savePost",post,{headers:headers}).pipe(map(res=>res.json()));

  }

   getAllPost(){

    return this.http.get('post/getAllPost').pipe(map(res => res.json()));
  }

   deletePost(id){

    return this.http.delete('post/deletePost/'+id)
      .pipe(map(res => res.json()));
  }

  getPostToUpdate(id){

    return this.http.get('post/getPost/'+id).pipe(map(res => res.json()));
  }

  updatePost(id,post){

    return this.http.put('post/updatePost/'+id,post).pipe(map(res => res.json()));
  }

}
