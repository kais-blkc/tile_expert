import { SearchModalMobileComponent } from '../search-modal-mobile/search-modal-mobile.component';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [ReactiveFormsModule, SearchModalComponent, SearchModalMobileComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Input({ required: true }) searchInputWidth: number = 0;
  public searchForm: FormGroup;
  public searchState: boolean = false;
  public searchFocus: boolean = false;
  public pageWidth: number = window.innerWidth;

  constructor(
    public elementRef: ElementRef,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.pageWidth = width;
  }

  setFormValue(formControlName: string, value: string) {
    this.searchForm.get(formControlName)?.setValue(value);
  }
}
