import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommCataTableComponent } from './recomm-cata-table.component';

describe('RecommCataTableComponent', () => {
  let component: RecommCataTableComponent;
  let fixture: ComponentFixture<RecommCataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommCataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommCataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
