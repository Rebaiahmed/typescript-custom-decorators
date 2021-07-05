import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoziationExampleComponent } from './memoziation-example.component';

describe('MemoziationExampleComponent', () => {
  let component: MemoziationExampleComponent;
  let fixture: ComponentFixture<MemoziationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoziationExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoziationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
