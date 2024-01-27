import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxsModule } from '@ngxs/store';
import { EditState } from '../ngxs_parts/edit.state';

import { MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    NgxsModule.forRoot([EditState]),
    MatInputModule
  ]
})
export class EditModule { }
