import { Component } from '@angular/core';

@Component({
  selector: 'random-button',
  template: `
    <div id="btn" 
      (mousemove)="onClick()" 
      (mousedown)="onMousedown()" 
      (mouseup)="onMouseup()" 
      [class.clicked]="clicked">
      {{ random }}
    </div>  
  `,
  styles: [`
    #btn {
      width: 100px;
      height: 100px;
      margin: 30px auto 0;
      border-radius: 50%;
      background: #EF454A;
      text-align: center;
      line-height: 105px;
      color: #FFF;
      font-size: 42px;
      font-weight: bold;
      cursor: pointer;
      opacity: .9;
      box-shadow: 0 5px 0 #D1483E;
      border: 3px solid #D1483E;
      user-select: none;
    }

    #btn:hover {
      opacity: 1;
    }

    #btn.clicked {
      margin-top: 36px;
      box-shadow: 0 4px 0 #D1483E;
    }  
  `]
})
export class RandomButtonComponent  {
  random = '?';
  clicked = false;

  onClick() {
    // 1 ~ 10의 랜덤 정수
    this.random = Math.floor((Math.random() * 10) + 1).toString();
  }

  onMousedown() {
    this.clicked = true;
  }

  onMouseup() {
    this.clicked = false;
  }

  
}
