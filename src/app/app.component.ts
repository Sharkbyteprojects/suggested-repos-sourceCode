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
  party:string="";
  xb:boolean=false;
  shl:string="Show";
  toggler(){
    this.xb=!this.xb;
    if(!this.xb){
      this.shl="Show";
    }else{
      this.shl="Hide";
    }
  }
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
    try{
      const lst:string=localStorage.getItem("3rdPart");
      if(lst!=null&&lst!=""){
        this.party=lst;
      }else{
        this.http.get("3rdpartylicenses.txt", {responseType: 'text'}).subscribe(list=>{
          this.party=list;
          localStorage.setItem("3rdPart", list);
        });
      }
    }catch(e){
      console.warn(e);
    }
    new Observable((sub)=>{
      sub.next(true);
      setInterval(()=>{
        console.log("Look for Updates");
        sub.next(true);
      }, (1000*60));
    }).subscribe((x)=>{
      try{
        this.http.get<fe>("assets/reposlist.json").subscribe(list=>{
          if(list.version > this.versiong){
            this.elemLi=list.repos;
          }
        });
      }catch(e){
        console.warn(e);
      }
    });
  }
}
