import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

export class BackendService {
    static kinveyAppKey = "kid_HyqjNN48m";
    static kinveyAppSecret = "4bc5f60e32ed4c87860ea51e01fe7a44";
    static kinveyUsername = "alain";
    static kinveyPassword = "192591";

    static setup() {
        Kinvey.init({
            appKey: BackendService.kinveyAppKey,
            appSecret: BackendService.kinveyAppSecret
        });
    }
}
