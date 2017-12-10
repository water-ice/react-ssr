import ContestListStore from './contest_list_store';

export default {
  ContestListStore,
}

export const CreateStoreMap = () => {
  return {
    ContestList: new ContestListStore()
  }
}