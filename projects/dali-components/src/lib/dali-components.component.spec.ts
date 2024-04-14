import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaliComponentsComponent } from './dali-components.component';

describe('DaliComponentsComponent', () => {
  let component: DaliComponentsComponent;
  let fixture: ComponentFixture<DaliComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaliComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaliComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
