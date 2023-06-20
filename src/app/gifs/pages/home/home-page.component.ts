import { Component } from '@angular/core';
import { GifsHistoryService } from '../../services/gifs-history.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'home-page-component',
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent  {
    constructor(private gifService: GifsHistoryService) 
     { }

     get searchResponse(): Gif[] 
     {return  this.gifService.getGifSearch};
}