import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent { }
