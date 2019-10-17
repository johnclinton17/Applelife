import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurrenderPolicyComponent } from './surrender-policy.component';

describe('SurrenderPolicyComponent', () => {
  let component: SurrenderPolicyComponent;
  let fixture: ComponentFixture<SurrenderPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurrenderPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurrenderPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
