import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Config } from "./app-initializer-config.models";
import { CONFIG_URL } from "./app-initializer-config.constants";

  @Injectable({
    providedIn: 'root'
  })
  export class ConfigService {

    config!: Config;

    constructor(private http: HttpClient) {}

    loadConfig(): Observable<Config> {
      return this.http.get<Config>(CONFIG_URL).pipe(tap(response => this.config = response));
    }
}
  