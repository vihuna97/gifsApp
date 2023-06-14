import { Component, Input } from '@angular/core';
import { GifsHistoryService } from 'src/app/gifs/services/gifs-history.service';

@Component({
  selector: 'gifs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
      constructor(public gifsHistory: GifsHistoryService){
      }

      public tags1: string[] = [...this.gifsHistory.getHistory];
      
      
      // get tags(){
      //   return this.gifsHistory.getHistory;
      // }
}
