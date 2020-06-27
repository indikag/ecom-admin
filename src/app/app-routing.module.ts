import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	{
		path: 'order',
		loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
