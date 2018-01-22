import UserStore from './user'; 
import TestStore from './test';
import ListStore from './list';
export {
  UserStore, 
  TestStore,
  ListStore,
}


export const CreateStoreMap = (cookie) => {
  return {
    UserStore: new UserStore(cookie),  
    TestStore: new TestStore(cookie),
    ListStore: new ListStore(cookie), 
  }
}