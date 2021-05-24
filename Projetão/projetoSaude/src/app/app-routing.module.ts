import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'modalone',
    loadChildren: () => import('./modalone/modalone.module').then( m => m.ModalonePageModule)
  },
  {
    path: 'modaltwo',
    loadChildren: () => import('./modaltwo/modaltwo.module').then( m => m.ModaltwoPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
