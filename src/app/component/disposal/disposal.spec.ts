import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disposal } from './disposal';

describe('Disposal', () => {
  let component: Disposal;
  let fixture: ComponentFixture<Disposal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disposal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Disposal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
