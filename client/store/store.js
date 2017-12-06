import DemoStateClass from './demo_state';

export const demoState = DemoStateClass;

export default {
  demoState,
}

export const createStoreMap = () => {
  return {
    demoState: new demoState()
  }
}