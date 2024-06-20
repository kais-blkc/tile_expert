import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public pageWidth: number = window.innerWidth;

  constructor() {}

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.pageWidth = width;
  }
}
