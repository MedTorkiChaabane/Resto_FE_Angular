import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = "http://localhost:8090/api/users";
  constructor(private http: HttpClient) { }
  // user = {firstName, lastName, email , password , roles(String [])....}
  signup(user: any) {
    return this.http.post(this.userUrl + "/signup", user);
  }
  // user = {email,password}
  login(user: any) {
    return this.http.post(this.userUrl + "/login", user);
  }
  getAllUsers() {
    return this.http.get<{ response: any[] }>(this.userUrl);
  }
  getUserById(id: number) {
    return this.http.get(this.userUrl + `/${id}`);
  }
  deleteUserById(id: number) {
    return this.http.delete(this.userUrl+ `/${id}`);
  }
  unBlockUser(id: number){
    return this.http.put(this.userUrl+'/unblock/'+id, {});
  }
  blockUser(id: number){
    return this.http.put(this.userUrl+'/block/'+id, {});
  }
  editUser(editRequest: any){
    return this.http.put(this.userUrl+'/user-edit', editRequest);
  }
}
