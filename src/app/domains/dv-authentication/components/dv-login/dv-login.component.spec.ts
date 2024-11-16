import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvLoginComponent } from './dv-login.component';

describe('DvLoginComponent', () => {
  let component: DvLoginComponent;
  let fixture: ComponentFixture<DvLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
