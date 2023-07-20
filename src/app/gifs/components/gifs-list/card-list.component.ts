import { GifsHistoryService } from 'src/app/gifs/services/gifs-history.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'card-list',
    templateUrl: 'card-list.component.html',
    styleUrls: ['./card-list.component.css']
})

export class CardListComponent  {
    constructor(private gifService: GifsHistoryService) { }
    
    @Input()
    public gifList!: Gif[];

    @Input()
    public buttonTitle!: string;

    @Input()
    public addingFlag!: string;

    @Input()
    public alertFlag!: boolean;
    
    public gif!: Gif;
    @ViewChild('alert')
    public alert!: ElementRef<HTMLInputElement>;

    @ViewChild('description')
    public description!: ElementRef<HTMLInputElement>;


    alertDinamic(className: string): void {
        this.alert.nativeElement.classList.add(className);
        this.alert.nativeElement.classList.remove('oculto');
        setTimeout(() => {
          this.alert.nativeElement.classList.add('oculto');
        }, 2000);
    }
    alertMessage(gif: Gif, action: string){
        switch (action) {
            case 'errorAlert':
                this.alertDinamic('alert-danger');
                this.description.nativeElement.innerText = 'Only can add 10 gifs max.';
                break;
            case 'removeAlert':
                this.gif = gif;
                this.gifService.removeGifs(this.gif);
                this.alertDinamic('alert-danger');
                this.description.nativeElement.innerText = 'Card has been removed from your Gifs.';
                    break;
            case 'addingAlert':
                this.gif = gif;
                this.gifService.addMyGifs(this.gif);
                this.alertDinamic('alert-success');
                this.description.nativeElement.innerText = 'Card has been added to your Gifs.';
                break;
        }
        return;
    }
}