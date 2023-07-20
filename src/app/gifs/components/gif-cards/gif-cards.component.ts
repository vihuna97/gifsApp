import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsHistoryService } from '../../services/gifs-history.service';


@Component({
  selector: 'gif-cards',
  templateUrl: './gif-cards.component.html',
  styleUrls: ['./gif-cards.component.css']
})
export class GifCardsComponent {

  constructor(private gifsHistory: GifsHistoryService){}
    @Input()
    public gif!: Gif;

    @Input()
    public title!: string;
    
    @Input()
    public addingFlag!: string;

    @Output() buttonEvent = new EventEmitter<Gif>;

    onClick(): void{
      this.buttonEvent.emit(this.gif);
    }


}
