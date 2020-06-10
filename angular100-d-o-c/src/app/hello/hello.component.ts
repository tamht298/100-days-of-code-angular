import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  user= {
    name: 'Tam Huynh',
    age: 22
  };

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    alert(`Name: ${this.user.name}; Age: ${this.user.age}`);
  }
}
