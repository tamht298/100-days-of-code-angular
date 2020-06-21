import { Component, OnInit } from '@angular/core';
import {Author, authors} from "../authors";

@Component({
  selector: 'app-author-list',
  template: `
<app-author-detail *ngFor="let author of authors" [author]="author" (deleteAuthor)="handleDelete($event)">></app-author-detail>
`,
  styles: [``]
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() { }
  ngOnInit() {
  }
  handleDelete(author: Author) {
    this.authors = this.authors.filter(item => item.id !== author.id);
  }
}
