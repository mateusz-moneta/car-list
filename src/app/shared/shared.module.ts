import { NgModule } from '@angular/core';
import { BlockScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';

import { CustomMaterialModule } from './custom-material/custom-material.module';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] }
  ]
})
export class SharedModule {}
