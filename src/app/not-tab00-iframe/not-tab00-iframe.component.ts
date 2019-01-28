import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-not-tab00-iframe',
  templateUrl: './not-tab00-iframe.component.html',
  styleUrls: ['./not-tab00-iframe.component.css']
})
export class NotTab00IframeComponent implements OnInit, AfterViewInit, AfterViewChecked {
// https://angular.io/guide/lifecycle-hooks

  ngAfterViewInit() {
    console.log('Test NotTab00IframeComponent');
    // this.textarea.nativeElement.focus()
    // this.varIsLoading = this.iframe_not_tab00.nativeElement.isLoading();
    // console.log('varIsLoading: '  + this.varIsLoading);
  }
  ngAfterViewChecked() {
    console.log('Test NotTab00IframeComponent');
  }

  constructor() { }

  ngOnInit() {
  }

}
