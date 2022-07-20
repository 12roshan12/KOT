import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionlistComponent } from './functionlist.component';

describe('FunctionlistComponent', () => {
  let component: FunctionlistComponent;
  let fixture: ComponentFixture<FunctionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
