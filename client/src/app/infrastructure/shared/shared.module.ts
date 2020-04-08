import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { sharedComponents } from './components';

import { MaterialModule } from './imports/material.module';

/**
 * Connects modules, pipes, directives, controls, and more that do not need to be singleton instances.
 */
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    sharedComponents,
  ],
  declarations: [ sharedComponents ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}
