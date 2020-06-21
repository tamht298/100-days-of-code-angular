import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from "../authors";

@Component({
  selector: 'app-author-detail',
  template: `
<div *ngIf="author">
<strong>{{author.firstName}} {{author.lastName}}</strong>
<button (click)="handleDelete()">x</button>
</div>
`,
  styles: [``]
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() { }
  ngOnInit() {
  }
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
