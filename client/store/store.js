import BattleState from './battle_list';
import CooperationState from './cooperation_list'
export {
  BattleState,
  CooperationState,
}

export default {
  BattleState,
  CooperationState,
}

export const CreateStoreMap = () => {
  return {
    battleState: new BattleState(),
    cooperationState: new CooperationState(),
  }
}