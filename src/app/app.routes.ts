import { Routes } from '@angular/router';
import { Branch } from './component/branch/branch';
import { App } from './app';
import { Store } from './component/store/store';
import { Dashboard } from './component/dashboard/dashboard';

export const routes: Routes = [

   { path: '', component: Dashboard }, 
    //   { path: '', redirectTo: '/', pathMatch: 'full' },  

    { path: 'service/requisition', component: Branch },
    { path: 'service/history', component: Branch },

    { path: 'purchase/pr', component: Branch },

    { path: 'stock/branch', component: Branch },
    { path: 'stock/store', component: Store },
    { path: 'stock/shade', component: Branch },
    { path: 'stock/stocklist', component: Branch },
    { path: 'stock/stockhistory', component: Branch },
    { path: 'stock/disposal', component: Branch },

    { path: '**', redirectTo: '/' },
   

    
];
