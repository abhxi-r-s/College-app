import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartNameComponent } from './depart-name.component';

describe('DepartNameComponent', () => {
  let component: DepartNameComponent;
  let fixture: ComponentFixture<DepartNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
