import UserStore from './user'; 
import TestStore from './test';
export {
  UserStore, 
  TestStore,
}


export const CreateStoreMap = () => {
  return {
    UserStore: new UserStore(),  
    TestStore: new TestStore() 
  }
}