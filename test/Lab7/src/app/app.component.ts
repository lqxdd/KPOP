import { Component } from '@angular/core';
import { UserRequest } from './user-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab7';
  public userData: UserRequest = new UserRequest();

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
  cardRegex=/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/;
  phoneRegex = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;

  nameErr = '';
  loginErr = '';
  sexErr = '';
  bdErr = '';
  emailErr = '';
  urlErr = '';
  cardErr = '';
  phoneErr = '';

  checkData()
  {
    this.nameErr = '';
    this.loginErr = '';
    this.sexErr = '';
    this.bdErr = '';
    this.emailErr = '';
    this.urlErr = '';
    this.cardErr = '';
    this.phoneErr = '';
    let sw = true;

    if(this.userData.email==='')
    {

      this.emailErr = "Заполните";
      sw=false;

    }
    else if(!this.emailRegex.test(this.userData.email))
    {

      this.emailErr = "Ошибка";
      sw=false;

    }

    if(this.userData.url==='')
    {

      this.urlErr = "Заполните";
      sw=false;

    }
    else if(!this.urlRegex.test(this.userData.url))
    {

      this.urlErr = "Ошибка";
      sw=false;

    }

    if(this.userData.card==='')
    {

      this.cardErr = "Заполните";
      sw=false;

    }
    else if(!this.cardRegex.test(this.userData.card))
    {

      this.cardErr = "Ошибка";
      sw=false;

    }

    if(this.userData.phone==='')
    {

      this.phoneErr = "Заполните";
      sw=false;

    }
    else if(!this.phoneRegex.test(this.userData.phone))
    {

      this.phoneErr = "Ошибка";
      sw=false;

    }
    
    if(this.userData.name==='')
    {

      this.nameErr = "Заполните";
      sw=false;

    }

    if(this.userData.sex==='')
    {

      this.sexErr = "Выберите";
      sw=false;

    }

    if(this.userData.bd==='')
    {

      this.bdErr = "Заполните";
      sw=false;

    }

    if(this.userData.login==='')
    {

      this.loginErr = "Заполните";
      sw=false;

    }
    
    if(sw)
    {
      this.userData = new UserRequest();
      alert("Во первых язык должен быть с строгой типизацией, так что питон в пролете,\n во-вторых в нем не должно быть вырвиглазной низкоуровщены как в си/с++. \nВ-третьих на него должна быть возможность адекватно навешивать либы. \nМой варик - жабаподобные языки в первую очередь котлин ибо у него имхо, самый приятный синтаксис.");
    }

    //
  }

}
