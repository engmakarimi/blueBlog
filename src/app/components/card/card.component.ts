import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/core/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() blog!: Blog;
}
// {
//   "id": 1,
//   "title": "",
//   "mainText": "",
//   "Author": {
//     "userName": "",
//     "profileUrl": ""
//   },
//   "comments": [],
//   "imageUrl": "",
//   "creationDate": ""
// }