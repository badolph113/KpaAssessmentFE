import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJsonFileComponent } from './update-json-file.component';

describe('UpdateJsonFileComponent', () => {
  let component: UpdateJsonFileComponent;
  let fixture: ComponentFixture<UpdateJsonFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateJsonFileComponent]
    });
    fixture = TestBed.createComponent(UpdateJsonFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
