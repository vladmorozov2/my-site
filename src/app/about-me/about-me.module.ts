import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMePreviewComponent } from '../about-me-preview/about-me-preview.component';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AboutMeRoutingModule } from './about-me-routing.module';

@NgModule({
  declarations: [AboutMeComponent, AboutMePreviewComponent],
  imports: [CommonModule, MatIconModule, FlexLayoutModule, MatButtonModule,AboutMeRoutingModule],
  
})
export class AboutMeModule {}
