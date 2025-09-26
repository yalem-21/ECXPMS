import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-sidebar',
  imports: [
    MatListModule,
    MatIconModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  readonly panelOpenState = signal(false);
  @Input() selectedModule: string = '';
  @Input() sidebarToggle: boolean = true;
  @Output() toggleSidebar = new EventEmitter<void>();
  //  sidebarToggle: boolean = true;  // Controls overall sidebar collapse
  expandedMenu: string | null = null; 



  masterData: any[] = [{ label: 'Property Type', icon: 'circle' },
  { label: 'Category', icon: 'circle' },
  { label: 'Location', icon: 'circle' },
  { label: 'Safety Box', icon: 'circle' }];
  propertyManagment: any[] = [{ label: 'Property Registration', icon: 'circle' },
  { label: 'Property Receiving', icon: 'circle' },
  { label: 'Property Issuing', icon: 'circle' },
  { label: 'Property Return', icon: 'circle' }];
  Request: any[] = [{ label: 'Purchase Request', icon: 'circle' },
  { label: 'Store Requisition', icon: 'circle' }];
  Report: any[] = [{ label: 'Property Report', icon: 'circle' },
  { label: 'Financial Report', icon: 'circle' },
  { label: 'Compliance Report', icon: 'circle' }];
  toggleMenu(menuLabel: string) {
    this.expandedMenu = this.expandedMenu === menuLabel ? null : menuLabel;
  }
  get subModules(): string[] {
    if (this.selectedModule === 'Service') {
      return ['Requisition', 'History'];
    }
    else if (this.selectedModule === 'Stock') {
      return ['Branch', 'Store', 'Shade', 'Stocklist', 'StockHistory', 'Disposal'];
    }
    else if (this.selectedModule === 'Purchase') {
      return ['Purchase Request'];
    }
    return [''];
  }

  constructor(private router: Router) { }

  togglesidebar() {
    this.toggleSidebar.emit()
  }

  navigateTo(sub: string): void {
    const path = this.selectedModule.toLowerCase() + '/' + sub.toLowerCase().replace(' ', '-');
    this.router.navigate([path]);
    this.toggleSidebar.emit();
  }

}
