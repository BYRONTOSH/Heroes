import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleheroeComponent } from './detalleheroe.component';

describe('DetalleheroeComponent', () => {
  let component: DetalleheroeComponent;
  let fixture: ComponentFixture<DetalleheroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleheroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
