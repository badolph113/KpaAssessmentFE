import { Component } from '@angular/core';
import { JsonFileService } from '../json-file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-json-file',
  templateUrl: './create-json-file.component.html'
})
export class CreateJsonFileComponent {
  selectedFile: File | null = null;

  constructor(private jsonFileService: JsonFileService, private router: Router) {}

  uploadJsonFile() {
    if (this.selectedFile) {
      this.jsonFileService.uploadJsonFile(this.selectedFile).subscribe({
        next: (response) => {
          this.router.navigate(['/update', response.id]);
        },
        error: (error) => {
          console.error('Error uploading file:', error);
          alert('Failed to upload file. Please try again.');
        }
      });
    } else {
      alert('Please select a file to upload.');
    }
  }
  

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedFile = target.files ? target.files[0] : null;
  }
}
