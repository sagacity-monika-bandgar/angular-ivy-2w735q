import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  menuList = [
    {
      menu: 'Dashboard',
      icon: 'dashboard',
    },
    {
      menu: 'Hierarchy',
      icon: 'account_tree',
    },
    {
      menu: 'Template Engine',
      icon: 'collections_bookmark',
    },
    {
      menu: 'Prepare Data',
      icon: 'file_copy',
    },
    {
      menu: 'Upload',
      icon: 'cloud_upload',
    },
    {
      menu: 'Queue',
      icon: 'radio_button_checked',
    },
    {
      menu: 'User Management',
      icon: 'person',
    },
    {
      menu: 'Application Settings',
      icon: 'settings',
    },
  ];
  panelOpenState = false;
}
