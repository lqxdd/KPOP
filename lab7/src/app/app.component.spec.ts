import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lab7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lab7');
  });

  it(`check empty login`, () => {
    component.userData.login="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#loginErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty name`, () => {
    component.userData.name="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#nameErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty email`, () => {
    component.userData.email="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check nonviable email`, () => {
    component.userData.email="@crab.com";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Ошибка');
  });

 

  it(`check empty pass`, () => {
    component.userData.sex="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#sexErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty conf pass`, () => {
    component.userData.bd="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#bdErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check different pass 1`, () => {
    component.userData.sex="12345678";
    component.userData.bd="123456789";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#bdErr').textContent;
    expect(elementText).toBe('must be equal');
  });

  it(`check different pass 2`, () => {
    component.userData.sex="123456789";
    component.userData.bd="12345678";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#sexErr').textContent;
    expect(elementText).toBe('must be equal');
  });

  it(`check address`, () => {
    component.userData.sex="123456789";
    component.userData.bd="12345678";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#sexErr').textContent;
    expect(elementText).toBe('must be equal');
  });

  it(`check if phone valid`, () => {
    component.userData.sex="123456789";
    component.userData.bd="12345678";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#sexErr').textContent;
    expect(elementText).toBe('must be equal');
  });


  // it(`check nonviable card`, () => {
  //   component.userData.card="asdasd";
  //   component.checkData();
  //   fixture.detectChanges();
  //   let elementText = fixture.nativeElement.querySelector('#cardErr').textContent;
  //   expect(elementText).toBe('Ошибка');
  // });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Lab7 app is running!');
  });*/
});
