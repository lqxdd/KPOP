// import {Input, Component} from '@angular/core';

// @Component({
//   selector: 'app-array',
//   templateUrl: './array.component.html',
//   styleUrls: ['./array.component.scss']
// })
// export class ArrayComponent {
//   @Input() array: string = "";
// }

import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'app-array',
 
    template: `<h3>Title: {{ title }}</h3>
    <p> array = {{arr}}</p>
    <p>{{tran()}}</p>`
})

export class ArrayComponent{ 
  @Input() title: string = "";
  @Input() arr: string = "";

  fruits: Array<number> = this.arr;
  tran() {
    return this.arr.toUpperCase
  }
}