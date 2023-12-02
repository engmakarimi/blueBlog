import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-avatar-info',
  templateUrl: './avatar-info.component.html',
  styleUrls: ['./avatar-info.component.scss'],
})
export class AvatarInfoComponent {
  @Input() user!: User;
  @Input() date!: string;
}
