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
  @Output() toggleSidebar = new EventEmitter<void>();
tabMeny: string[]=['Master Data ', 'Property Management', 'Requests', 'Inspection','Transfer','Disposal','Report','User','Setting','help']

masterData:string[]=['Property Type',' Catagory','Location','Safty Box'];
propertyManagment:string[]=['Property Registration','Property Recieving','Property Issueing','Property Return'];
Request:string[]=['Purchase Request', 'Store Requesition'];
Report:string[]=['Property report', 'Financial Report', 'Compliance Report'];

  
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
