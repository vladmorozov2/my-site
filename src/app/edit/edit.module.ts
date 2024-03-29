import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxsModule } from '@ngxs/store';
import { EditState } from '../ngxs-parts/edit.state';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EditRoutingModule } from './edit-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    NgxsModule.forRoot([EditState]),
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSelectModule,
    EditRoutingModule,
    MatToolbarModule,
  ],
})
export class EditModule {}
