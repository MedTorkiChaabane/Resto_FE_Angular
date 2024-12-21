import { Injectable } from "@angular/core";
const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";
@Injectable({
  providedIn: "root",
})
export class TokenStorageService {
  signOut() {
    window.sessionStorage.clear();
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    const token_key = sessionStorage.getItem(TOKEN_KEY);
    return token_key ? token_key : '';
  }
  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser() {
    const user = sessionStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }
}