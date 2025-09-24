import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ActionConfig, Column, Table } from '../../Shared/table/table';
import { ActionService } from '../../service/action';
import { Branchform } from '../../models/branch';
import { GenericService } from '../../service/generic-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-branch',
  standalone:true,
  imports: [
    Table,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    // MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './branch.html',
  styleUrl: './branch.scss'
})
export class Branch implements OnInit{

  form: FormGroup;
  isBrowser: boolean;

  constructor(
     private action:ActionService,
     private service:GenericService,
     private fb: FormBuilder,@Inject(PLATFORM_ID) private platformId: Object
     
    ) {
    
    
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(50)]],
      datetime: [''],
    });
  }

  ngOnInit(): void {
    this.getAllBranch();
  }
  async getAllBranch(): Promise<void> {
    try {
      const result = await this.action.getAll<Branchform>('users').toPromise();
      console.log(result) 
    } catch (error) {
      this.service.handleError(error as HttpErrorResponse);
    }
  }
userColumns: Column<any>[] = [
    { key: 'Id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' }
  ];

  usersData: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  userActions: ActionConfig[] = [
    { name: 'update', label: 'Update' },
    { name: 'delete', label: 'Delete' },
    { name: 'approve', label: 'Approve' },
    { name: 'approve', label: 'Detail' }
  ];

  handleAction(event: { action: string; row: any }): void {
    console.log(`Action '${event.action}' ID: ${event.row.id}`);
  }

onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
}
  


}
