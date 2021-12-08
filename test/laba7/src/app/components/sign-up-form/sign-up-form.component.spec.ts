import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form is invalid', () => {
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#submit-button');
    expect(button.disabled).toBeTruthy();
    component.formModel.login = 'somelogin';
    component.formModel.email = 'somelogin@gmail.com';
    component.formModel.password = '12345';
    component.formModel.repeatedPassword = '12345';
    component.formModel.fullName = 'Ivan Ivanov';
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });


  it('password is empty', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#password-error')).toBeDefined();
    component.formModel.password = '12345';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#password-error')).toBeFalsy();
  });

  it('password and repeated password are different', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#repeat-password-error')).toBeFalsy();
    component.formModel.password = '12345';
    component.formModel.repeatedPassword = '12345';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#repeat-password-error')).toBeFalsy();
    component.formModel.repeatedPassword = '3234324';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#repeat-password-error')).toBeDefined();
  });

  it('email is empty or invalid', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#email-error').textContent).toBe('email is required');
    component.formModel.email = 'someemail';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#email-error').textContent).toBe('invalid email');
    component.formModel.email = 'someemail@gmail.com';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#email-error')).toBeFalsy();
  });



  it('full name is empty', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('#fullname-error')).toBeDefined();
    component.formModel.fullName = 'Ivan Ivanov';
    fixture.detectChanges();
    expect(nativeElement.querySelector('#fullname-error')).toBeFalsy();
  });



  it('on submit there must be alert from browser', () => {
    const nativeElement = fixture.nativeElement;
    const alertSpy = spyOn(window, 'alert');
    const button = nativeElement.querySelector('#submit-button');
    expect(button.disabled).toBeTruthy();
    component.formModel.login = 'login';
    component.formModel.email = 'login@gmail.com';
    component.formModel.password = '123';
    component.formModel.repeatedPassword = '123';
    component.formModel.fullName = 'Fullanme';
    fixture.detectChanges();
    fixture.componentInstance.handleSubmit();
    expect(alertSpy).toHaveBeenCalledTimes(1);
  })
});
