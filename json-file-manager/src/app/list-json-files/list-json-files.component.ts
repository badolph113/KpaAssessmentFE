import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { JsonFileService } from '../json-file.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-json-files',
  templateUrl: './list-json-files.component.html',
})
export class ListJsonFilesComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<string>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private jsonFileService: JsonFileService, private router: Router) {}

  // Assign the data to the dataSource
  ngOnInit() {
    this.jsonFileService.getAllJsonFilesIds().subscribe({
      next: (ids) => {
        this.dataSource.data = ids;
      },
      error: (e) => {
        console.error('Error fetching files:', e);
        alert('Failed to load files list.');
      }
    });
  }
  
  // Configure the paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }
  getRowNumber(index: number): number {
    if (!this.paginator) {
      return index + 1;
    }
    return this.paginator.pageIndex * this.paginator.pageSize + index + 1;
  }

  // Update routing
  onRowClicked(id: string) {
    this.router.navigate(['/update', id]);
  }
  
}
