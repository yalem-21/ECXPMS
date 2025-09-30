import { Component, EventEmitter, Input, Output, signal,SimpleChanges } from '@angular/core';
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
  isMobile:boolean=false;
  @Input() selectedModule: string = '';
  @Input() sidebarToggle: boolean = true;
  @Input() screenWidth:number=0;
  @Output() toggleSidebar = new EventEmitter<void>();
  //  sidebarToggle: boolean = true;  // Controls overall sidebar collapse
  expandedMenu: string | null = null; 



  masterData: any[] = [{ label: 'Property Type', icon: 'circle' },
  { label: 'Category', icon: 'circle',link:'catagory' },
  { label: 'Location', icon: 'circle',link:'location' },
  { label: 'Safety Box', icon: 'circle',link:'shade' }];
  propertyManagment: any[] = [{ label: 'Property Registration', icon: 'circle',link:'propertyRegistration' },
  { label: 'Property Receiving', icon: 'circle',link:'propertyReceiving' },
  { label: 'Property Issuing', icon: 'circle',link:'propertyIssuing' },
  { label: 'Property Return', icon: 'circle',link:'propertyReturn' }];
  Request: any[] = [{ label: 'Purchase Request', icon: 'circle',link:'purchaseRequest' },
  { label: 'Store Requisition', icon: 'circle',link:'requisition' }];
  Report: any[] = [{ label: 'Property Report', icon: 'circle',link:'propertyReport' },
  { label: 'Financial Report', icon: 'circle',link:'financialReport' },
  { label: 'Compliance Report', icon: 'circle',link:'complianceReport' }];
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
