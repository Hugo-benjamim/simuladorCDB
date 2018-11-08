import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CdbComponent } from './cdb/cdb.component';
import { SelicComponent } from './selic/selic.component';
import { DolarComponent } from './dolar/dolar.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cdb', component: CdbComponent},
    {path: 'selic', component: SelicComponent},
    {path: 'dolar', component: DolarComponent}];
