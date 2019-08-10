import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {ToolbarComponent} from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    FormsModule,
    ToolbarComponent,
  ]
})
export class SharedModule {
}
