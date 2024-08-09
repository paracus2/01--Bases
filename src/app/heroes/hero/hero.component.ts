import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'Ironman'
  public age: number = 32


  changeHero(): void{
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 45
  }


}
