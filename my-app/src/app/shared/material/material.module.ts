import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
