import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 's3-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public navLinkList = [
    {
      id: 1,
      label: 'Test',
      path: '/forecasts/test',
    },
    {
      id: 2,
      label: 'View Forecasts',
      path: '/forecasts/forecast-list',
    },
  ];
}
