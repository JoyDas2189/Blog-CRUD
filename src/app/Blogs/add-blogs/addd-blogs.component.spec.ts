import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddBlogsComponent } from './addd-blogs.component';

describe('AdddBlogsComponent', () => {
  let component: AdddBlogsComponent;
  let fixture: ComponentFixture<AdddBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdddBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdddBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
