import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntradayDetailsComponent } from './intraday-details.component';

describe('IntradayDetailsComponent', () => {
  let component: IntradayDetailsComponent;
  let fixture: ComponentFixture<IntradayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntradayDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntradayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
