import {NgModule} from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
} from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class MaterialModule {
}
