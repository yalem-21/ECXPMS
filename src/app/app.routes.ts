import { Routes } from '@angular/router';
import { Branch } from './component/branch/branch';
import { App } from './app';
import { Store } from './component/store/store';
import { Dashboard } from './component/dashboard/dashboard';
import { Requisition } from './component/requisition/requisition';
import { StockHistory } from './component/stock-history/stock-history';
import { Shade } from './component/shade/shade';
import { Disposal } from './component/disposal/disposal';

export const routes: Routes = [

    { path: '', redirectTo: 'dashboared', pathMatch: 'full' }, 
   { path: 'dashboared', component: Dashboard }, 
       

    { path: 'service/requisition', component: Branch },
    { path: 'service/history', component: Branch },
   { path: 'requisition', component: Requisition },
    { path: 'stokeHistory', component: StockHistory },
    { path: 'shade', component: Shade },
    { path: 'disposal', component: Disposal },
    { path: 'purchase/pr', component: Branch },

    { path: 'stock/branch', component: Branch },
    { path: 'stock/store', component: Store },
    { path: 'stock/shade', component: Branch },
    { path: 'stock/stocklist', component: Branch },
    { path: 'stock/stockhistory', component: Branch },
    { path: 'stock/disposal', component: Branch },

    { path: '**', redirectTo: '/' },
   

    
];
