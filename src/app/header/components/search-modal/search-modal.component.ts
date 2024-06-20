import { trigger, transition, style, animate, state } from '@angular/animations';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';

const mokHistory: string[] = [
  'закрепить теги',
  'кнопка',
  'приложение',
  'форма',
  'текстовое поле',
  'выпадающий список'
];

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1, visibility: 'visible', top: '50px' })),
      state('hidden', style({ opacity: 0, visibility: 'hidden', top: '0px' })),
      transition('visible <=> hidden', animate('0.3s ease'))
    ])
  ]
})
export class SearchModalComponent {
  @Output() toggleSearchState = new EventEmitter<boolean>();
  @Output() selectHistory = new EventEmitter<string>();
  @Input() public parentElementRef: ElementRef;
  @Input() public searchInputWidth: number = 0;
  @Input() public searchState: boolean = false;
  @Input() public parentFormGroup: FormGroup;
  public history: string[] = mokHistory;
  public searchFocus: boolean = false;

  constructor() {}

  @HostListener('window:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.parentElementRef.nativeElement.contains(event.target)) {
      this.searchState = false;
      this.searchFocus = false;
      this.toggleSearchState.emit(false);
    }
  }
}
