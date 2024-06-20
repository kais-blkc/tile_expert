import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomCheckboxComponent } from '../../../share/custom-checkbox/custom-checkbox.component';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-modal-mobile',
  standalone: true,
  imports: [CommonModule, CustomCheckboxComponent, ReactiveFormsModule],
  templateUrl: './search-modal-mobile.component.html',
  styleUrl: './search-modal-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1, visibility: 'visible', left: '0px' })),
      state('hidden', style({ opacity: 0, visibility: 'hidden', left: '-150px' })),
      transition('visible <=> hidden', animate('0.5s ease'))
    ])
  ]
})
export class SearchModalMobileComponent {
  @Output() toggleSearchState = new EventEmitter<boolean>();
  @Input({ required: true }) searchState: boolean = false;
  @Input({ required: true }) parentFormGroup: FormGroup;
}
