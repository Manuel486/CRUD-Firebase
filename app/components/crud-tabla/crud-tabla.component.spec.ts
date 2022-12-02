import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTablaComponent } from './crud-tabla.component';

describe('CrudTablaComponent', () => {
  let component: CrudTablaComponent;
  let fixture: ComponentFixture<CrudTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
