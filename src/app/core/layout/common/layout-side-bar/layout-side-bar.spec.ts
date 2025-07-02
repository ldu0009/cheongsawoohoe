import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSideBar } from './layout-side-bar';

describe('LayoutSideBar', () => {
  let component: LayoutSideBar;
  let fixture: ComponentFixture<LayoutSideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSideBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSideBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
