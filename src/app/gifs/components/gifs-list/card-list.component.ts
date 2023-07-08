import { GifsHistoryService } from 'src/app/gifs/services/gifs-history.service';
import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'card-list',
    templateUrl: 'card-list.component.html',
    styleUrls: ['./card-list.component.css']
})

export class CardListComponent  {
    constructor() { }
    
    @Input()
    public gifList!: Gif[];
}