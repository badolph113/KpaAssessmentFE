import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJsonFileComponent } from './create-json-file.component';

describe('CreateJsonFileComponent', () => {
  let component: CreateJsonFileComponent;
  let fixture: ComponentFixture<CreateJsonFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateJsonFileComponent]
    });
    fixture = TestBed.createComponent(CreateJsonFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
