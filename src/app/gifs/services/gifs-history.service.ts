import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsHistoryService {
    constructor() { }
    private gifsHistory: string[] = [];

    get getHistory(){
        return [...this.gifsHistory];
    }

    get getHistoryToLower(){
        let algo = [...this.gifsHistory].map((element) => { return element.toLowerCase()});
        return algo;
    }

    private organizedHistory(gifName: string){
        if(this.getHistoryToLower.includes(gifName.toLowerCase())){
            this.gifsHistory = this.gifsHistory.filter((element) => {return element.toLowerCase() !== gifName.toLowerCase()}); 
        }
        this.gifsHistory.unshift(gifName);
        if(this.gifsHistory.length > 10){
            this.gifsHistory.pop();
        }
    }

    public addHistory(gifName: string){
        if(gifName.length === 0) return;
        this.organizedHistory(gifName);
    }

}