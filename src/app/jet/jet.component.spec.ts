import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetComponent } from './jet.component';

describe('JetComponent', () => {
  let component: JetComponent;
  let fixture: ComponentFixture<JetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
