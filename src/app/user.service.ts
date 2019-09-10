import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  canLogin(): boolean {
    const token = sessionStorage.getItem("user-token");
    console.log("Token => ", token);
    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  login(username: string, password: string): boolean {
    ///
    if (username === "paras" && password === "angular") {
      sessionStorage.setItem("user-token", "paras");
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.clear();
  }
}
