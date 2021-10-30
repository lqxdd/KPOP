// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'my-app';
//   array: string ='test';
// }

import { Component } from '@angular/core';
      
@Component({
    selector: 'app-root',
    template: `<input type="text" placeholder='type your array' [(ngModel)]="arr" /> 
    <app-array [title]="title" [arr]="arr"></app-array>`
})

export class AppComponent { 
  public title = 'Hello world!';
  public arr = '';
}

