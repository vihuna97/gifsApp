import { Onclick } from './../../../gifs/interfaces/gifs.interfaces';
import { Component, ElementRef, Input, OnInit, ViewChild,  } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event} from '@angular/router';
import { GifsHistoryService } from 'src/app/gifs/services/gifs-history.service';
import {filter} from 'rxjs'

@Component({
  selector: 'gifs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
      constructor(private gifsHistory: GifsHistoryService, private route: ActivatedRoute, private router: Router){
      }
    ngOnInit(): void {
      this.router.events.subscribe((event: Event) => {if (event instanceof NavigationEnd) {
        console.log(event.url)
        if(event.url === '/gifs/my-gifs'){
          this.routerLink = '/gifs/search-gifs';
        this.historyList.nativeElement.style.display = 'none';
        this.anchorButton.nativeElement.innerText = 'Gifs Search';
        } else {
          this.routerLink = '/gifs/my-gifs';
          this.historyList.nativeElement.style.display = '';
          this.anchorButton.nativeElement.innerText = 'My Gifs';
        }
      }})
    }
      
      
      public helperFlag: boolean = true;
      public routerLink: string = '';

      get tags(){
        return this.gifsHistory.getHistory;
      }

      @ViewChild('historyList')
      public historyList!: ElementRef<HTMLInputElement>;

      @ViewChild('button')
      public anchorButton!: ElementRef<HTMLInputElement>;

      onClickFooterButton():void{
        this.helperFlag = !this.helperFlag;
        // this.routerLink = this.helperFlag ? '';
        if(!this.helperFlag){
        this.historyList.nativeElement.style.display = 'none';
        this.anchorButton.nativeElement.innerText = 'Búsqueda de Gifs';
      } else {
        this.historyList.nativeElement.style.display = '';
        this.anchorButton.nativeElement.innerText = 'My gifs';
      }
      return;
    }

      onclickGifHistory(history: string):void {
        this.gifsHistory.searchGif(history);
      }

      
}
