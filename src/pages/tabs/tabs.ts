import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { ListPage } from '../list/list';
import { LoginPage } from '../login/login';
import { DetailsPage } from '../details/details';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = DetailsPage;

  tab3Root = SettingsPage;

  constructor() {

  }
}
