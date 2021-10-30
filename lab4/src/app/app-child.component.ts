import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
})
export class MyComponent implements OnChanges {
  @Input() someInput: number[] = [];

  min: number = Number.MIN_SAFE_INTEGER;
  max: number = Number.MAX_SAFE_INTEGER;

  procText: string = '';

  ngOnChanges() {
    this.min = Math.min(...this.someInput);
    this.max = Math.max(...this.someInput);
    console.log(this.someInput);

   /*  this.proc(this.textInput);

    this.glebberOtveti = this.quadraticEquation(this.glebber[0], this.glebber[1], this.glebber[2])
    // @ts-ignore
    this.answer =  this.glebberOtveti ? `D: ${this.glebberOtveti.discriminant} R1: ${this.glebberOtveti.quadratic_roots[0]} R2: ${this.glebberOtveti.quadratic_roots[1]}`: "false" */
   
  }

  /* proc(text: string) {
    this.procText =
      text.replace(/о/g, '?') + ' string length is: ' + text.length;
  }

  glebberOtveti:  { discriminant: number; quadratic_roots: number | number[]; } | false = false
  answer:string=""

  quadraticEquation = (a: number, b: number, c: number) => {
    if (a == 0) return false;
    let res: { discriminant: number; quadratic_roots: number | number[] } = {
      discriminant: 0,
      quadratic_roots: 0,
    };
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if (D < 0) return false;
    res['discriminant'] = D;
    if (D == 0) res['quadratic_roots'] = (-b + Math.sqrt(D)) / (2 * a);
    else if (D > 0) {
      let tmp = [];
      tmp.push((-b + Math.sqrt(D)) / (2 * a));
      tmp.push((-b - Math.sqrt(D)) / (2 * a));
      res['quadratic_roots'] = tmp;
    }
    return res;
  }; */
}
