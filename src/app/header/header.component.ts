import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('headerNavbar') headerNavbar: ElementRef;
  public navbarWidth: number = 0;
  public searchForm: FormGroup;

  constructor(private changeDetection: ChangeDetectorRef, private fb: FormBuilder) {
    // form builder form with 1 input control
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngAfterViewInit(): void {
    this.navbarWidth = this.headerNavbar.nativeElement.offsetWidth + 64;
    this.changeDetection.detectChanges();
  }
}
