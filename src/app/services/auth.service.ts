import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLogedIn() {
        return this.getToken() ? true : false
    }

    getToken() {
        return localStorage.getItem("token")
    }

    isAdmin() {}

    isCustomer() {}
}