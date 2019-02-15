import { Component, ChangeDetectorRef, OnInit, OnDestroy} from '@angular/core';
import { Globals } from '../globals';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { DomSanitizer } from '@angular/platform-browser';
import {MediaMatcher, BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})

export class AppRoutingComponent implements OnInit, OnDestroy {
  selectedToolbarTabId: string;
  selectedLanguageId: string;
  selectedWpPage: string;
  selectedNotWpPage: string;
  selectedWpPath: string;
  isNotWpPage: string;
  isLoading: string;
  width: number;
  width_max: number;
  height: number;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  specialRoute: any;
  specialRouteTab06Visible: any;

  // tslint:disable-next-line:max-line-length
  constructor(public globals: Globals, public breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef,  media: MediaMatcher, private route: ActivatedRoute, private test: AppComponent, public sanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 1060px)');
    this._mobileQueryListener = () => { changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener); };
    console.log(this.mobileQuery.matches ? 'mobileQuery: match' : 'mobileQuery:no match');
  }

  ngOnInit() {
     // this.getParams();
     setTimeout(() => {
      this.getParams();
        }, 2000);
  }

  getParams(): void {
    // die folgende Zeile basiert auf der Route { path: 'tabselect/:selectedTab', component: AppRoutingComponent }
    // this.route.snapshot.paramMap.get('selectedTab')
    // und basiert auf der URL /tabselect/Tab01
    // die folgende Zeile basiert auf der Route { path: 'tabselect', component: AppRoutingComponent },
    // this.route.snapshot.queryParams['selectedTab']
    // und basiert auf der URL zB.
    // https://localhost:4200/tabselect?selectedLanguage=de&selectedTab=Tab02&myhtmlfile=openses_01_00.html
    // https://localhost:4200/tabselect?selectedLanguage=de&selectedTab=Tab02&myhtmlfile=openses_01_00.html&myID=T1
    // https://stackoverflow.com/questions/44819308/how-to-route-in-angular-4
    // https://localhost:4200/tabselect?selectedLanguage=de&selectedTab=Tab03&myID=P2.1
    // https://openses.org/tabselect?selectedLanguage=de&selectedTab=Tab02&myID=T3.8
    if (this.route.snapshot.queryParams['selectedToolbarTabId'] == null) {
      console.log('ohne ? Parameter');
      this.globals.selectedToolbarTabId = 'tab00';
      this.selectedToolbarTabId = 'tab00';
      this.globals.selectedLanguageId = 'de';
      this.selectedLanguageId = 'de';
      this.globals.selectedCommunityId = 'local';
      this.globals.selectedSidenavLeftPanelId = 'sidenavLeftPanel';
      this.globals.selectedSidenavRightPanelId = 'XXX';
      this.globals.selectedSidenavMainContentId = 'XXX';
      this.globals.selectedMainContentId = 'Start';
      this.globals.selectedWpPath = 'https://eidlab-identity-federation-playground.openses.org/eidlab-wp/';
      this.globals.selectedWpPage = 'testseite';
      this.globals.isLoading = 'false';
      this.globals.isNotWpPage = 'false';
      this.globals.selectedNotWpPage = 'http://eidlab.ch';
      this.globals.specialRoute = 'false';
      this.specialRoute = 'false';
      this.globals.specialRouteTab06Visible = 'true';
      this.specialRouteTab06Visible = 'true';
      /* this.globals.selectedLanguageId = 'de';
      console.log(this.globals.selectedLanguageId);
      this.globals.selectedToolbarTabId = 'tab00';
      console.log(this.globals.selectedToolbarTabId);
      this.globals.selectedWpPage = 'testseite';
      console.log(this.globals.selectedWpPage); */
    } else {
      // tslint:disable-next-line:max-line-length
      // http://localhost:4200/pageselect?selectedLanguageId=de&selectedToolbarTabId=tab01&selectedWpPage=spiralcurriculum
      // tslint:disable-next-line:max-line-length
      // https://eidlab-identity-federation-playground.openses.org/pageselect?selectedLanguageId=de&selectedToolbarTabId=tab01&selectedWpPage=spiralcurriculum
      console.log('mit ? Parameter');
      this.globals.isLoading = '5s_left';
      this.isLoading = '5s_left';
      this.globals.isNotWpPage = 'false';
      this.isNotWpPage = 'false';
      this.globals.selectedNotWpPage = 'https://eidlab.ch';
      this.selectedNotWpPage = 'https://eidlab.ch';
      /* this.selectedLanguageId = this.route.snapshot.queryParams['selectedLanguageId'];
      this.globals.selectedLanguageId = this.selectedLanguageId; */
      this.globals.selectedLanguageId = this.route.snapshot.queryParams['selectedLanguageId'];
      this.selectedLanguageId = this.route.snapshot.queryParams['selectedLanguageId'];
      console.log('?selectedLanguage  = ' + this.globals.selectedLanguageId);
      /* this.selectedToolbarTabId = this.route.snapshot.queryParams['selectedToolbarTabId'];
      this.globals.selectedToolbarTabId = this.selectedToolbarTabId; */
      this.globals.selectedToolbarTabId = this.route.snapshot.queryParams['selectedToolbarTabId'];
      this.selectedToolbarTabId = this.route.snapshot.queryParams['selectedToolbarTabId'];
      console.log('?selectedToolbarTabId = ' + this.globals.selectedToolbarTabId);
      /* this.selectedWpPage = this.route.snapshot.queryParams['selectedWpPage'];
      this.globals.selectedWpPage = this.selectedWpPage; */
      this.globals.selectedWpPath = 'https://eidlab-identity-federation-playground.openses.org/eidlab-wp/';
      this.selectedWpPath = 'https://eidlab-identity-federation-playground.openses.org/eidlab-wp/';
      this.globals.selectedWpPage = this.route.snapshot.queryParams['selectedWpPage'];
      this.selectedWpPage = this.route.snapshot.queryParams['selectedWpPage'];
      // this.selectedWpPath = 'https://eidlab-identity-federation-playground.openses.org/eidlab-wp/';


      console.log('?selectedWpPage = ' + this.globals.selectedWpPage);
      this.globals.selectedCommunityId = 'local';

      this.globals.specialRoute = 'true';
      this.specialRoute = 'true';
      this.globals.specialRouteTab06Visible = 'false';
      this.specialRouteTab06Visible = 'false';
     // this.globals.isLoading = '0s_left';

      // this.test.changeSelection();
      this.test.timeoutTest();
    }
  }
   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
