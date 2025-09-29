import { Component, signal,HostListener } from '@angular/core';
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
    Navbar,
    Sidebar,
    MatSidenavModule,
    MatIconModule,
    CommonModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EcxPMSUI');
  selectedModule: string = '';
  sidebarToggle:boolean=true;
  SidebarToggleIcon:string='chevron_left';
    screenWidth:number=0;
  isMobile:boolean=false;
  onModuleSelected(module: string, sidenav: MatSidenav): void {
    this.selectedModule = module;
    sidenav.open();
  }
  sidebarToggled(){
    this.sidebarToggle=!this.sidebarToggle;
    console.log(this.sidebarToggle);
    if(this.SidebarToggleIcon=='chevron_left'){
      this.SidebarToggleIcon='chevron_right';
    }
    else{
      this.SidebarToggleIcon='chevron_left';
    }
  }

   @HostListener('window:resize', ['$event'])
  handleWindowResize(event: UIEvent): void {
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<800){
this.isMobile=true;
    }else{
      this.isMobile=false;
    }
  }
}
