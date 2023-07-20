import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { MyGifsComponent } from './pages/my-gifs/my-gifs.component';

const routes: Routes = [
    {path: 'search-gifs',
    component: HomePageComponent
},
    {
        path: 'my-gifs',
        component: MyGifsComponent
    },
    {
        path: '**',
        redirectTo: 'search-gifs'
    }
    
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GifsRoutingModule { }
