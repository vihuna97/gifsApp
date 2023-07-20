import { Component } from '@angular/core';
import { GifsHistoryService } from '../../services/gifs-history.service';

@Component({
  selector: 'app-my-gifs',
  templateUrl: './my-gifs.component.html',
  styleUrls: ['./my-gifs.component.css']
})
export class MyGifsComponent {
    constructor(private gifService: GifsHistoryService){
    }
    

    buttonTitle: string = 'Descartar GIF';

    get myGifs(){
      return this.gifService.getMyGifs;
    }

}
