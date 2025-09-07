import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogPost } from '../models/models';
import { ApiResponse } from '../helper/ApiResponse';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  data:any
  constructor(private http:HttpClient) { }
    getAll()
  {
   return this.http.get<ApiResponse<BlogPost>>(environment.baseurl+'BLog/GetBlogList')
  }
  getAllEvents()
   {
    return this.http.get<ApiResponse<any>>(environment.baseurl+'Events/GetEventList')
   }
  getAllProducts()
   {
    return this.http.get<ApiResponse<any>>(environment.baseurl+'Product/GetProductList')
   }
   
   askquestion(form:any)
   {
    return this.http.post(environment.baseurl+'UsersQuestion/CreateUsersQuestion',form)
   }

}
