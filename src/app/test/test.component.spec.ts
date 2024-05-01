import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TestComponent } from './test.component';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setTimeoutFunction', fakeAsync(() => {
    spyOn(component, "timeOutFunction")
    component.clickedFunction("ABC")
    tick(2000)
    expect(component.timeOutFunction).toHaveBeenCalled();
  }));
});
