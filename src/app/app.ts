import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Shared/navbar/navbar';
import { Sidebar } from './Shared/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [
        RouterOutlet,
        HttpClientModule,
        Navbar,
        Sidebar,
        MatSidenavModule,

       
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EcxPMSUI');
  selectedModule: string = '';

  onModuleSelected(module: string, sidenav: MatSidenav): void {
    this.selectedModule = module;
    sidenav.open();
  }
}
