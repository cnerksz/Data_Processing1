import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
getUsers(){
  let users: User[] = [
    {
      userId: 0,
      registryNumber: '120',
      firstName: 'Can',
      lastName: 'Eröksüz',
      isActive: true,
    },
    {
      userId: 1,
      registryNumber: '240',
      firstName: 'Mehmet',
      lastName: 'Güler',
      isActive: true,
    },
    {
      userId: 2,
      registryNumber: '360',
      firstName: 'Fatih',
      lastName: 'Kılınç',
      isActive: false,
    },
    {
      userId: 3,
      registryNumber: '480',
      firstName: 'Kerim',
      lastName: 'Tarhan',
      isActive: true,
    },
    {
      userId: 4,
      registryNumber: '600',
      firstName: 'Neriman',
      lastName: 'Baş',
      isActive: true,
    },
    {
      userId: 5,
      registryNumber: '720',
      firstName: 'Fazıl',
      lastName: 'Sayın',
      isActive: false,
    },
  ];
  return users;
}
}
