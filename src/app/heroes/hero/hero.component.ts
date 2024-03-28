import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ernesto';
  public age: number = 45;

  changeName():void {
    this.name = 'Daniela'
  }

  changeAge():void {
    this.age = 40
  }
}
