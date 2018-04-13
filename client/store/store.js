import UserStore from './user';   
export {
  UserStore,   
}


export const CreateStoreMap = (cookie) => {
  return { 
    UserStore: new UserStore(cookie), 
  }
}