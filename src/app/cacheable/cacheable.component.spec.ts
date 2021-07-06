import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheableComponent } from './cacheable.component';

describe('CacheableComponent', () => {
  let component: CacheableComponent;
  let fixture: ComponentFixture<CacheableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacheableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
