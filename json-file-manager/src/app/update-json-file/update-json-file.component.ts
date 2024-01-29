import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonFileService } from '../json-file.service';

@Component({
  selector: 'app-update-json-file',
  templateUrl: './update-json-file.component.html',
})
export class UpdateJsonFileComponent implements OnInit {
  id: string = '';
  content: string = '';

  constructor(
    private route: ActivatedRoute,
    private jsonFileService: JsonFileService
  ) {}

  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get('id');
    if (routeId) {
      this.jsonFileService.getJsonFileById(routeId).subscribe({
        next: (file) => {
          this.id = routeId;
          this.content = file.jsonData;
        },
        error: (e) => {
          console.error('Error fetching file:', e);
          alert('Failed to fetch file data.');
        }
      });
    }
  }
  
  updateFile() {
    this.jsonFileService.updateJsonFile(this.id, this.content).subscribe({
      next: (response) => {
       
      },
      error: (e) => {
        console.error('Error updating file:', e);
        console.error(this);
        alert('Failed to update file.');
      }
    });
  }
}
