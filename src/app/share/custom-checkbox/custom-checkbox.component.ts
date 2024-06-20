import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCheckboxComponent {
  @Input() text: string;
}
