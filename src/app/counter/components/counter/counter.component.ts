import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h1>This is a counter</h1>
  <h1>{{ title }}</h1>
  <hr>
  <p>
    Contador: {{ counter }}
    <button (click)="incrase()">
  +1
  </button>
  <button (click)="reset()">
    Reset
  </button>

  <button (click)="decrase()">
  -1
  </button>
  </p>
  `,
})

export class CounterComponent{
  public title: string  = 'Hola mundo nuevo';
  public counter: number = 10;

  incrase(): void {
    this.counter += 1;
  }
  decrase(): void {
    this.counter -= 1;
  }
  reset(): void {
    this.counter = 10;
  }
}
