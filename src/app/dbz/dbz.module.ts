import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBZComponent } from './pages/main-page.component';



@NgModule({
  exports:[
    DBZComponent
  ],
  declarations: [
    DBZComponent
  ],
  imports: [
    CommonModule
  ],
})
export class DbzModule { }
