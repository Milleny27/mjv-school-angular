import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsRegistrationComponent } from './collaborators-registration.component';

describe('CollaboratorsRegistrationComponent', () => {
  let component: CollaboratorsRegistrationComponent;
  let fixture: ComponentFixture<CollaboratorsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorsRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
