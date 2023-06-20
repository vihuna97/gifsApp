import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-cards',
  templateUrl: './gif-cards.component.html',
  styleUrls: ['./gif-cards.component.css']
})
export class GifCardsComponent {
    @Input()
    public gif!: Gif;
}
