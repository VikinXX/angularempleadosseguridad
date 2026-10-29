import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemplosSignal } from './ejemplos-signal';

describe('EjemplosSignal', () => {
  let component: EjemplosSignal;
  let fixture: ComponentFixture<EjemplosSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemplosSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemplosSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
