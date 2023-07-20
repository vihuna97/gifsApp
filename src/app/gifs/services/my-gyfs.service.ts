import { Injectable } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class myGifsService {
    public myGifs: Gif[] = [];
    constructor() { }
    
}