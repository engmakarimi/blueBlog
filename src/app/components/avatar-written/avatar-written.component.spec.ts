import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarWrittenComponent } from './avatar-written.component';

describe('AvatarWrittenComponent', () => {
  let component: AvatarWrittenComponent;
  let fixture: ComponentFixture<AvatarWrittenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarWrittenComponent]
    });
    fixture = TestBed.createComponent(AvatarWrittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
