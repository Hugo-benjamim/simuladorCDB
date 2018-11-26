import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcaComponent } from './ipca.component';

describe('IpcaComponent', () => {
  let component: IpcaComponent;
  let fixture: ComponentFixture<IpcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
