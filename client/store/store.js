import ContestsStoreClass from './contests_store';

export default {
  ContestsStoreClass,
}

export const CreateStoreMap = () => {
  return {
    Contests: new ContestsStoreClass()
  }
}