import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  specialRoute: any = 'false';
  selectedToolbarTabId: any = 'tab00';
  selectedLanguageId: any = 'de';
  selectedCommunityId: any = 'local';
  selectedSidenavLeftPanelId: any = 'sidenavLeftPanel';
  selectedSidenavRightPanelId: any = 'XXX';
  selectedSidenavMainContentId: any = 'XXX';
  selectedMainContentId: any = 'Start';
  selectedWpPath: any = 'https://eidlab-identity-federation-playground.openses.org/eidlab-wp/';
  selectedWpPage: any = 'testseite';
  isLoading: any = 'false';
  isNotWpPage: any = 'false';
  selectedNotWpPage: any = 'http://eidlab.ch';
}
