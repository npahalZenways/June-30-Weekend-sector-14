import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private http: HttpClient){}
    canActivate(){
        return true;
    }
}