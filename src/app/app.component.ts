import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { ResizedEvent } from 'angular-resize-event/resized-event';
import {MediaMatcher, BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {formatDate } from '@angular/common';
import {Globals} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'eIdLab.ch';
  width: number;
  height: number;
  today = new Date();
  jstoday = '';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public stateVar: any;
  public sidenavLeftPanelId: any;
  public sidenavRightPanelId: any;
  public sidenavMainContentId: any;
  public selectedToolbarTabId: any;
  public selectedLanguageId: any;
  public selectedCommunityId: any;
  public selectedMainContentId: any;



  // tslint:disable-next-line:max-line-length
  constructor(public breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public globals: Globals, public sanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 620px)');
    this._mobileQueryListener = () => { changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener); };
    console.log(this.mobileQuery.matches ? 'mobileQuery: match' : 'mobileQuery:no match');
    this.sidenavLeftPanelId = globals.selectedSidenavLeftPanelId;
    this.sidenavRightPanelId = globals.selectedSidenavRightPanelId;
    this.sidenavMainContentId = globals.selectedSidenavMainContentId;
    this.selectedToolbarTabId = globals.selectedToolbarTabId;
    this.selectedLanguageId = globals.selectedLanguageId;
    this.selectedCommunityId = globals.selectedCommunityId;
    this.selectedMainContentId = globals.selectedMainContentId;
  }

  onResized(event: ResizedEvent): void {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log('width: ' + this.width);
    console.log('hight: ' + this.height);
    console.log(this.mobileQuery.matches ? 'mobileQuery: match' : 'mobileQuery:no match');
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.stateVar = JSON.stringify(state);
        console.log('BreakpointState: ' + this.stateVar);
      }
      );
    }

    private changeSelection() {
      this.globals.selectedToolbarTabId = this.selectedToolbarTabId;
      console.log('selectedToolbarTabId: ' + this.globals.selectedToolbarTabId);
      this.globals.selectedMainContentId = this.selectedMainContentId;
      console.log('selectedMainContentId: ' + this.globals.selectedMainContentId);
      this.globals.selectedLanguageId = this.selectedLanguageId;
      console.log('selectedLanguageId: ' + this.globals.selectedLanguageId);
      this.globals.selectedCommunityId = this.selectedCommunityId;
      console.log('selectedCommunityId: ' + this.globals.selectedCommunityId);
    }


    private loadHomeLoginUrl() {
      window.location.href = 'https://openses.org/homelogin';
    }

    private loadGitHubUrl() {
      window.location.href = 'https://github.com/openses';
    }

  ngOnInit() {
    // https://angular.io/api/common/formatDate
    this.jstoday = formatDate(this.today, 'dd.MM.yyyy', 'en', '' );
   }

   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
