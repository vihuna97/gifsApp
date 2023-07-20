import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { GifsModule } from './gifs/gifs.module';

const routes: Routes = [
    {
        path: 'gifs',
        loadChildren: () => GifsModule,
    },
    {
        path: '**',
        redirectTo: 'gifs',
    }
] 



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
