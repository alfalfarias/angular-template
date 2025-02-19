import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSkeletonComponent } from './header-skeleton.component';

describe('HeaderSkeletonComponent', () => {
  let component: HeaderSkeletonComponent;
  let fixture: ComponentFixture<HeaderSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
