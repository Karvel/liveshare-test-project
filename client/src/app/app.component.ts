import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 's3-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'liveshare-test-project';
}
