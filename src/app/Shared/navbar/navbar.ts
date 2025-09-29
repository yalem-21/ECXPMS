import { Component, EventEmitter, Input, input, OnChanges, Output,SimpleChanges  } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

// import { RouterOutlet } from '@angular/router';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule
  
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnChanges{


  notificationCount=5;
  activMenu='true';
  isMobile:boolean=false;
@Input() screenWidth=0;
    @Output() moduleSelected = new EventEmitter<string>();
  modules = ['home','Service','Stock','Purchase'];

  constructor(private authService: AuthService) {}


  selectModule(module: string): void {
    this.moduleSelected.emit(module);
  }

  logout(): void {
    this.authService.logout();
  }

   ngOnChanges(changes: SimpleChanges): void {
    if (changes['screenWidth']) {
      if (this.screenWidth < 800) {
        this.isMobile=true;
      } else {
          this.isMobile=false;
      }
    }
  }

}
