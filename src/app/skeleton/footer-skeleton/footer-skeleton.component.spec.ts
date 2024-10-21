import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSkeletonComponent } from './footer-skeleton.component';

describe('FooterSkeletonComponent', () => {
  let component: FooterSkeletonComponent;
  let fixture: ComponentFixture<FooterSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
