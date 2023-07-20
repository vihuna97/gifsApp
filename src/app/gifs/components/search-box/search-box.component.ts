import { Element } from '@angular/compiler';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsHistoryService } from '../../services/gifs-history.service';

@Component({
    selector: 'gifs-search-box',
    template: `<h3>Search</h3>
                <div class="col">
                    <input #inputTag (keyup.enter)="searchTag()" type="text" class="form-control" placeholder="Search Gifs..."> 
                </div>`
})

export class SearchBoxComponent   {
    constructor(private gifsHistory: GifsHistoryService) { }
    
    @ViewChild('inputTag')
    public tagInput!: ElementRef<HTMLInputElement>;

    searchTag(): void{
        const newTag = this.tagInput.nativeElement.value;
        this.tagInput.nativeElement.value = '';
            this.gifsHistory.searchGif(newTag);
            console.log(this.gifsHistory.getHistory);
    }


}