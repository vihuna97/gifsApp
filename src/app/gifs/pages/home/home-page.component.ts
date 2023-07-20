import { Component } from '@angular/core';
import { GifsHistoryService } from '../../services/gifs-history.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'home-page-component',
    styleUrls: ['./home-page.component.css'],
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent  {
    constructor(private gifService: GifsHistoryService) 
     { }

     public buttonTitle: string = 'Agregar GIF';

     get searchResponse(): Gif[] 
     {return  this.gifService.getGifSearch};

     alertMessage(): string {
        if(this.gifService.getMyGifs.length >= 10){
            return 'errorAlert';
        } else return 'addingAlert'
     }
}