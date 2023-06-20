import { Onclick } from './../../../gifs/interfaces/gifs.interfaces';
import { Component, Input } from '@angular/core';
import { GifsHistoryService } from 'src/app/gifs/services/gifs-history.service';

@Component({
  selector: 'gifs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
      constructor(private gifsHistory: GifsHistoryService){
      }
     
      get tags(){
        return this.gifsHistory.getHistory;
      }


      OnclickGifHistory(history: string):void {
        this.gifsHistory.searchGif(history);
      }

}
