import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMembersComponent } from './edit-members.component';

describe('EditMembersComponent', () => {
  let component: EditMembersComponent;
  let fixture: ComponentFixture<EditMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
