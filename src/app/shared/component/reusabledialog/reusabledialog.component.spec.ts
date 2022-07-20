import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusabledialogComponent } from './reusabledialog.component';

describe('ReusabledialogComponent', () => {
  let component: ReusabledialogComponent;
  let fixture: ComponentFixture<ReusabledialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusabledialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusabledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
