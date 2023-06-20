import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/gifs-list/card-list.component';
import { GifCardsComponent } from './components/gif-cards/gif-cards.component';



@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, GifCardsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomePageComponent]
})
export class GifsModule { }
