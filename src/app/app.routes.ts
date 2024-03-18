import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntradayDetailsComponent } from './intraday-details/intraday-details.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'intraday/:symbol',
        component: IntradayDetailsComponent,
        title: "Intraday Details"
    }
];
