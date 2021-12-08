import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name='Jora';
    expect(userData.name).toEqual('Jora');
  });

  it('login is accessible', () => {
    expect(userData.login).toEqual('');
    userData.login='Jora';
    expect(userData.login).toEqual('Jora');
  });

  it('pass is accessible', () => {
    expect(userData.sex).toEqual('');
    userData.sex='Jora';
    expect(userData.sex).toEqual('Jora');
  });

  it('confpass is accessible', () => {
    expect(userData.bd).toEqual('');
    userData.bd='Jora';
    expect(userData.bd).toEqual('Jora');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='Jora';
    expect(userData.email).toEqual('Jora');
  });

  

  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone='Jora';
    expect(userData.phone).toEqual('Jora');
  });

  it('msgText is accessible', () => {
    expect(userData.msgText).toEqual('');
    userData.msgText='Jora';
    expect(userData.msgText).toEqual('Jora');
  });

});
