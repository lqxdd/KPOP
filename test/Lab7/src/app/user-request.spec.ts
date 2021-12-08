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

  it('sex is accessible', () => {
    expect(userData.sex).toEqual('');
    userData.sex='Jora';
    expect(userData.sex).toEqual('Jora');
  });

  it('bd is accessible', () => {
    expect(userData.bd).toEqual('');
    userData.bd='Jora';
    expect(userData.bd).toEqual('Jora');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='Jora';
    expect(userData.email).toEqual('Jora');
  });

  it('url is accessible', () => {
    expect(userData.url).toEqual('');
    userData.url='Jora';
    expect(userData.url).toEqual('Jora');
  });

  it('card is accessible', () => {
    expect(userData.card).toEqual('');
    userData.card='Jora';
    expect(userData.card).toEqual('Jora');
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

  it('city is accessible', () => {
    expect(userData.city).toEqual('');
    userData.city='Jora';
    expect(userData.city).toEqual('Jora');
  });

  it('index is accessible', () => {
    expect(userData.index).toEqual('');
    userData.index='Jora';
    expect(userData.index).toEqual('Jora');
  });

});
