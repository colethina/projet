import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'gestion',
    loadChildren: () => import('./gestion/gestion.module').then( m => m.GestionPageModule)
  },
  {
    path: 'gestionemploye',
    loadChildren: () => import('./Gestiondesreunions/gestionemploye/gestionemploye.module').then( m => m.GestionemployePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
