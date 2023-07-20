import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GifSearching, Gif } from '../interfaces/gifs.interfaces';




@Injectable({providedIn: 'root'})
export class GifsHistoryService {

    constructor(private http: HttpClient) { 
        this.getLocalStorage();
    }

    private _gifSearched: Gif[] = [];
    private _myGifs: Gif[] = [];

    private _gifsHistory: string[] = [];
    private _apiKey: string = '3hYh5rr1UBjoZ9NpBCqJbpxsjKUlTlZX';

    get getGifSearch(){
        return [...this._gifSearched];
    }

    get getMyGifs(){
        return [...this._myGifs];
    }

    get getHistory(){
        return [...this._gifsHistory];
    }

    get getHistoryToLower(){
        let historyToLower = [...this._gifsHistory].map((element) => { return element.toLowerCase()});
        return historyToLower;
    }

    private organizedHistory(gifName: string){
        if(this.getHistoryToLower.includes(gifName.toLowerCase())){
            this._gifsHistory = this._gifsHistory.filter((element) => {return element.toLowerCase() !== gifName.toLowerCase()}); 
        }
        this._gifsHistory.unshift(gifName);
        if(this._gifsHistory.length > 10){
            this._gifsHistory.pop();
        }
        this.setLocalStorage('history');
    }

    private setLocalStorage(option: string):void{
        switch (option) {
            case 'history':
                localStorage.setItem('History', JSON.stringify(this.getHistory));
                break;
            case 'myGifs':
                localStorage.setItem('myGifs', JSON.stringify(this.getMyGifs));
                break;
            default:
                return;
        }
    }

    private getLocalStorage():void{
        if(!localStorage.getItem('History')) return;
        this._gifsHistory = JSON.parse(localStorage.getItem('History')!);
        this._myGifs = JSON.parse(localStorage.getItem('myGifs')!);


        if(this.getHistory.length === 0 ) return;
        this.searchGif(this.getHistory[0]);
    }

    public removeGifs(gif: Gif): void {
        this._myGifs = this._myGifs.filter((element) => {return element.id != gif.id});
        this.setLocalStorage('myGifs');
    }

    public addMyGifs(gif: Gif): void {
        if(this._myGifs.length >= 10){
            console.warn('Ha excedido el número de gifs');
            return;
        }
        this._myGifs = this._myGifs.filter((element) => {return element.id != gif.id});
        this._myGifs.push(gif);
        this.setLocalStorage('myGifs'); 
        console.log(this._myGifs);
    }
    public searchGif(gifName: string): void{
        let apiUrl: string = 'https://api.giphy.com/v1/gifs';

        const params = new HttpParams()
                       .set('api_key', this._apiKey)
                       .set('q', gifName)
                       .set('limit', 10);

        if(gifName.length === 0) return;

        this.organizedHistory(gifName);

        this.http.get<GifSearching>(`${apiUrl}/search`, {params}).subscribe(resp => {this._gifSearched = resp.data});
    }

}