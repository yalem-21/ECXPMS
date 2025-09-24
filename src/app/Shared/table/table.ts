import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

export interface Column<T = any> {
  key: keyof T;
  header: string;
}

export interface ActionConfig {
  name: string;
  label: string;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTableModule, MatInputModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table<T = any> implements OnChanges { 
@Input() columns: Column<T>[] = [];
  @Input() data: T[] = [];
  @Input() actions: ActionConfig[] = [];
  @Output() action = new EventEmitter<{ action: string; row: T }>();

  dataSource = new MatTableDataSource<T>([]);
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
    if (changes['columns'] || changes['actions']) {
      this.displayedColumns = this.columns.map(col => col.key as string);
      if (this.actions.length > 0) {
        this.displayedColumns.push('actions');
      }
    }
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAction(actionName: string, row: T): void {
    this.action.emit({ action: actionName, row });
  }

  downloadCSV(): void {
    const filteredData = this.dataSource.filteredData;
    let csv = this.columns.map(col => col.header).join(',') + '\n';
    filteredData.forEach(row => {
      csv += this.columns.map(col => row[col.key]).join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'filtered_data.csv';
    link.click();
    URL.revokeObjectURL(url);
  }
}
