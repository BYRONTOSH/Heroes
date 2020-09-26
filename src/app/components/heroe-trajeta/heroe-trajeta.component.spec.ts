import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTrajetaComponent } from './heroe-trajeta.component';

describe('HeroeTrajetaComponent', () => {
  let component: HeroeTrajetaComponent;
  let fixture: ComponentFixture<HeroeTrajetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeTrajetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTrajetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
