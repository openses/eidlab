import { Component, ChangeDetectorRef, OnDestroy, OnInit, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { ResizedEvent } from 'angular-resize-event/resized-event';
import {MediaMatcher, BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {formatDate } from '@angular/common';
import {Globals} from './globals';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy/* , AfterViewInit, AfterViewChecked */ {
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
  public selectedWpPage: any;
  cookieValue = 'UNKNOWN';
  cookieCheck = false;
  public varIsLoading: any;
  // public iframeVisible: any;
    @ViewChild('iframe_not_tab00') iframe_not_tab00: ElementRef;
      /* ngAfterViewInit() {
        console.log('Test2 iframe_not_tab00');
        // this.textarea.nativeElement.focus()
        // this.varIsLoading = this.iframe_not_tab00.nativeElement.isLoading();
        // console.log('varIsLoading: '  + this.varIsLoading);
      } */
      /* ngAfterViewChecked() {
        console.log('Test3 NotTab00IframeComponent');
        // this.globals.isLoading = 'false';
      console.log(this.globals.isLoading);
      console.log('Start Time Out 5000');
      setTimeout(() => {
        console.log('End Time Out 5000');
        this.globals.isLoading = 'false';
        console.log(this.globals.isLoading);
        }, 5000);
        console.log('Start Time Out ngAfterViewChecked');
        setTimeout(() => {
          console.log('View is fully loaded');
          console.log(this.iframe_not_tab00.nativeElement.offsetHeight);
          this.globals.isLoading = 'false';
        }, 0);
        this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.stateVar = JSON.stringify(state);
        console.log('BreakpointState: ' + this.stateVar);
      }
      );
      console.log('Stop Time Out ngAfterViewChecked');
      } */


  // tslint:disable-next-line:max-line-length
  constructor(public breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public globals: Globals, public sanitizer: DomSanitizer, private cookieService: CookieService) {
    this.mobileQuery = media.matchMedia('(max-width: 1060px)');
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
    this.selectedWpPage = globals.selectedWpPage;
    // this.iframeVisible = globals.iframeVisible;
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

    private timeoutTest() {
      // ...is loading...' wird eingeblendet'
      setTimeout(() => {
        this.globals.isLoading = '0s_left';
        console.log('isLoading : ' + this.globals.isLoading);
        console.log('End Time Out 5s: 5000');
          }, 5000);
    }

    private changeSelection() {
      this.globals.isLoading = '5s_left';
      console.log('isLoading: ' + this.globals.isLoading);
      this.globals.selectedToolbarTabId = this.selectedToolbarTabId;
      console.log('selectedToolbarTabId: ' + this.globals.selectedToolbarTabId);
      this.globals.selectedLanguageId = this.selectedLanguageId;
      console.log('selectedLanguageId: ' + this.globals.selectedLanguageId);
      this.globals.selectedCommunityId = this.selectedCommunityId;
      console.log('selectedCommunityId: ' + this.globals.selectedCommunityId);
      this.globals.selectedWpPage = this.selectedWpPage;
      console.log('selectedWpPage: ' + this.globals.selectedWpPage);
      // im die changeSelection() Prozedur aufrufenden click() Ereignis wird am Schluss die ttimeoutTest() Prozedur aufgerufen
      // welche this.globals.isLoading = '0s_left' setzt -> '...is loading...' wird ausgeblendet
    }

    private iframeLoadCheck(event) {
      console.log('!tab0_iframe_load_check: ' + event.object.get('id'));
      console.log('!tab0_iframe_load_check: ');
    }

    private loadHomeLoginUrl() {
      window.location.href = 'https://openses.org/homelogin';
    }

    private loadGitHubUrl() {
      window.location.href = 'https://github.com/openses/eidlab';
    }

    private checkCookie (cookieName) {
      this.cookieCheck = this.cookieService.check(cookieName);
    }

    private setCookie (cookieName, cookieValue) {
      this.cookieService.set(cookieName, cookieValue);
    }

    private getCookie (cookieName) {
      this.cookieValue = this.cookieService.get(cookieName);
    }

    private deleteCookie (cookieName) {
      this.cookieService.delete(cookieName);
    }

    private deleteAllCookies () {
      this.cookieService.deleteAll('/', 'www.facebook.com');
      this.cookieService.deleteAll('/', 'localhost');
      console.log('deleteAllCookies');
    }

  ngOnInit() {
    // https://angular.io/api/common/formatDate
    this.jstoday = formatDate(this.today, 'dd.MM.yyyy', 'en', '' );
   }

   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
