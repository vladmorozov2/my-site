import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMePreviewComponent } from '../about-me-preview/about-me-preview.component';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from '../app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AboutMeComponent, AboutMePreviewComponent],
  imports: [CommonModule, MatIconModule, FlexLayoutModule],
  bootstrap: [AppComponent],
})
export class AboutMeModule {}
