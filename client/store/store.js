import DemoStateClass from './demo_state';

export const demoState = DemoStateClass;

export default {
  demoState,
}

export const CreateStoreMap = () => {
  return {
    demoState: new demoState()
  }
}