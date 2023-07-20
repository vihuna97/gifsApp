import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/gifs-list/card-list.component';
import { GifCardsComponent } from './components/gif-cards/gif-cards.component';
import { MyGifsComponent } from './pages/my-gifs/my-gifs.component';
import { GifsRoutingModule } from './gifs-routing.module';



@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, GifCardsComponent, MyGifsComponent],
  imports: [
    CommonModule,
    SharedModule,
    GifsRoutingModule
  ],
  exports: []
})
export class GifsModule { }
