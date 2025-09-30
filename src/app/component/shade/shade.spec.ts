import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shade } from './shade';

describe('Shade', () => {
  let component: Shade;
  let fixture: ComponentFixture<Shade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
