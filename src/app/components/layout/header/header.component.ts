import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pu-header',
  template: `
    <!-- <div>
      <p>
        header works! <br />
        {{ appTitle }} <br />
        {{ getTitle() }} <br />
        The value passed from parent to child is {{ name }}
      </p>
      <h1 (click)="nameClickHandler()">{{ name }}</h1>
    </div> -->
    <div class="header-main-container">
      <h1 class="app-title">{{ appTitle }}</h1>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 60px;
      }

      .header-main-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
      }

      .app-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @Input() name = '';

  @Output() headerNameClicked = new EventEmitter<string>();

  appTitle = 'Learning Angular';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.appTitle = 'Learning Angular 2';
    }, 2000);
  }

  getTitle() {
    return 'From Method Title';
  }

  nameClickHandler() {
    this.headerNameClicked.next('Header Clicked!!');
  }
}
