import UserStore from './user'; 
import TestStore from './test';
import ListStore from './list';
export {
  UserStore, 
  TestStore,
  ListStore,
}


export const CreateStoreMap = () => {
  return {
    UserStore: new UserStore(),  
    TestStore: new TestStore(),
    ListStore: new ListStore(), 
  }
}