import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title:string = 'repoList';
  versiong:number = 0;
  elemLi=[{"name": "Loading", "link": "#load", "desc": "Loading additional Data"}];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    class element{
      public name:string;
      public link:string;
      public desc:string;
    };
    class fe{
      public repos:element[];
      public version:number;
    };
    new Observable((sub)=>{
      sub.next(true);
      setInterval(()=>{
        sub.next(true);
      }, (1000*60)*3);
    }).subscribe((x)=>{
      this.http.get<fe>("assets/reposlist.json").subscribe(list=>{
        if(list.version > this.versiong){
          this.elemLi=list.repos;
        }
      });
    });
  }
}
