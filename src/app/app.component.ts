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
  accountData = [
    {
      name: 'Hudson Group',
      count: 'C1245',
      sacc: '10 S Account',
      kacc: '530 K Accounts',
      subscribers: '5125 subscribers',
    },
    {
      name: 'Cosidine-Hammes',
      count: 'C1345',
      sacc: '123 S Account',
      kacc: '252 K Accounts',
      subscribers: '5208 subscribers',
    },
    {
      name: 'Kuvalis,Swaniawski',
      count: 'C1549',
      sacc: '149 S Account',
      kacc: '352 K Accounts',
      subscribers: '7977 subscribers',
    },
    {
      name: 'Erdman Inc',
      count: 'C1845',
      sacc: '150 S Account',
      kacc: '936 K Accounts',
      subscribers: '4586 subscribers',
    },
    {
      name: 'Lehner-Herman',
      count: 'C2223',
      sacc: '129 S Account',
      kacc: '542 K Accounts',
      subscribers: '880 subscribers',
    },
    {
      name: 'Stroman Group',
      count: 'C1745',
      sacc: '14 S Account',
      kacc: '719 K Accounts',
      subscribers: '6188 subscribers',
    },
    {
      name: 'Herzog',
      count: 'C2245',
      sacc: '15 S Account',
      kacc: '171 K Accounts',
      subscribers: '181 subscribers',
    },
  ];
}
