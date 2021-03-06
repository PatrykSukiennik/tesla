import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageCarsComponent} from './page-cars/page-cars.component';
import {PageOrdersComponent} from './page-orders/page-orders.component';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageConfigurationComponent} from './page-configuration/page-configuration.component';
import {PageThanksComponent} from './page-thanks/page-thanks.component';
import {PagePrivacyPolicyComponent} from './page-privacy-policy/page-privacy-policy.component';
import {PageOrderInfoComponent} from './page-order-info/page-order-info.component';
import {PagePrintingComponent} from './page-printing/page-printing.component';


const routes: Routes = [
  { path: 'cars', component: PageCarsComponent},
  { path: 'orders', component: PageOrdersComponent},
  { path: 'order-info', component: PageOrderInfoComponent},
  { path: 'home', component: PageHomeComponent},
  { path: 'configuration', component: PageConfigurationComponent},
  { path: 'thanks', component: PageThanksComponent},
  { path: 'pp', component: PagePrivacyPolicyComponent},
  { path: 'print', component: PagePrintingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PageCarsComponent, PageOrdersComponent,
  PageHomeComponent, PageConfigurationComponent, PageThanksComponent, PagePrivacyPolicyComponent];
