import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements AfterViewInit {
  public offsetWidth: number = 0;

  constructor(
    private element: ElementRef,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.offsetWidth = this.element.nativeElement.offsetWidth;
    this.changeDetection.detectChanges();
  }
}
