import { RematchDispatcher, RematchDispatcherAsync } from '@rematch/core';

export interface StudentItem {
  id: number;
  name: string;
  gender: string;
  phone: string;
  age: number;
  grade: number;
  classNumber: number;
  email: number;
  address: number;
  birthday: number;
}

export interface StudentState {
  studentList: StudentItem[];
}

export interface StudentAction {
  updateDispatch: RematchDispatcher;

  getListEffect: RematchDispatcherAsync;
}
