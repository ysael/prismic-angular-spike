import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  template: `
    <p>
      hi works!
    </p>
  `,
  styles: []
})
export class HiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
