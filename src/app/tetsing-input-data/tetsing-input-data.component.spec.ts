import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetsingInputDataComponent } from './tetsing-input-data.component';

describe('TetsingInputDataComponent', () => {
  let component: TetsingInputDataComponent;
  let fixture: ComponentFixture<TetsingInputDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetsingInputDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TetsingInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
