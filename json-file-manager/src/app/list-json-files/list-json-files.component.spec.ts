import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJsonFilesComponent } from './list-json-files.component';

describe('ListJsonFilesComponent', () => {
  let component: ListJsonFilesComponent;
  let fixture: ComponentFixture<ListJsonFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListJsonFilesComponent]
    });
    fixture = TestBed.createComponent(ListJsonFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
