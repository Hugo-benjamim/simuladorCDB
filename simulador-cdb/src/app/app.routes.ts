import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SelicComponent } from './selic/selic.component';
import { DolarComponent } from './dolar/dolar.component';
import { IpcaComponent } from './ipca/ipca.component';
import { SimulateComponent } from './simulate/simulate.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'selic', component: SelicComponent,
        children: [{ path: '', component: SimulateComponent}]},
    {path: 'dolar', component: DolarComponent},
    {path: 'ipca', component: IpcaComponent}];
