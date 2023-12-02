import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-avatar-written',
  templateUrl: './avatar-written.component.html',
  styleUrls: ['./avatar-written.component.scss']
})
export class AvatarWrittenComponent {
  @Input() user!: User;
}
