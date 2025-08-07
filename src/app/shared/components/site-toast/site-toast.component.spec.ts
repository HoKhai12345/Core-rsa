import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteToastComponent } from './site-toast.component';

describe('SiteLoaderComponent', () => {
  let component: SiteToastComponent;
  let fixture: ComponentFixture<SiteToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
