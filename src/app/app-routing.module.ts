import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
    // loadChildren: () => import('./findtrip/findtrip.module').then(m => m.FindtripPageModule)
    
  },
  {
    path: 'findtrip2',
    loadChildren: () => import('./findtrip2/findtrip2.module').then(m => m.FindtripPageModule)
    
  },
  {
    path: 'findtrip3',
    loadChildren: () => import('./findtrip3/findtrip3.module').then(m => m.FindtripPageModule)
    
  },
  {
    path: 'findtrip4',
    loadChildren: () => import('./findtrip4/findtrip4.module').then(m => m.FindtripPageModule)
    
  },
  // { path: 'findtrip2', loadChildren: './findtrip2/findtrip2.module#FindtripPageModule2' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
