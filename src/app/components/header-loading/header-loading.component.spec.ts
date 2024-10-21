import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoadingComponent } from './header-loading.component';

describe('HeaderLoadingComponent', () => {
  let component: HeaderLoadingComponent;
  let fixture: ComponentFixture<HeaderLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
