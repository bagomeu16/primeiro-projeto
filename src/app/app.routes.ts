import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilhoAComponent } from './filho-a/filho-a.component';
import { FilhoBComponent } from './filho-b/filho-b.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { guardiãoGuard } from './guardião.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    {path: 'hello-world', title: 'Hello World', component: HelloWorldComponent, children: [
        {path: 'filho-a', title:'Filho A', component: FilhoAComponent},
        {path: 'filho-b', title:'Filho B',component: FilhoBComponent}
    ]},
    {path: 'data-binding', title:'Data Bindig',component: DataBindingComponent, canActivate: [guardiãoGuard]},
    {path: 'directives', title:'Directives',component: DirectivesComponent},
    {path: 'customers', title:'Customers',component: CustomerListComponent},
    {path: 'customer/:id', title:'Customer Detail', component: CustomerDetailComponent},
    {path: 'reactive-form', title: 'Reactive Form', component: ReactiveFormComponent},
    {path: 'template-form', title: 'Template Form', component: TemplateFormComponent},
    {path: 'weather', title: 'Clima', component: WeatherComponent},
    {path: 'pipes', title: 'Pipes', component: PipesComponent},
    {path: '', redirectTo: '/hello-world', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
