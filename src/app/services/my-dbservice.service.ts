import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDBserviceService {

  public urlsJeson = {
    jsonA:"https://raw.githubusercontent.com/didi3762/ajax/master/ajax4.json",
  }

  constructor(private myHttp:HttpClient) { }

  httpGet(url:string) :Observable<string>{
    return this.myHttp.get<string>(url)
  }



  HebWords:string[] = []
  englishWords:string[] = []
  wordHeb:string
  API_KEY = 'a0e86e494bmsh4d89c361a8749e8p1e76acjsnc912453b36d7';
}
