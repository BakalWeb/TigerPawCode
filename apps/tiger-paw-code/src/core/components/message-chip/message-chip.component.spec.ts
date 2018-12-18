import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageChipComponent } from './message-chip.component';

describe('MessageChipComponent', () => {
  let component: MessageChipComponent;
  let fixture: ComponentFixture<MessageChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
