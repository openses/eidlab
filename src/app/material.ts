import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';

@NgModule ({
  imports: [
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatExpansionModule,
      MatButtonModule,
      MatMenuModule,
      MatTreeModule
      ],
  exports: [
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatExpansionModule,
      MatButtonModule,
      MatMenuModule,
      MatTreeModule
  ],
})

export class MaterialModule {}
