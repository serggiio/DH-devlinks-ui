import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvRegisterComponent } from './dv-register.component';

describe('DvRegisterComponent', () => {
  let component: DvRegisterComponent;
  let fixture: ComponentFixture<DvRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DvRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
