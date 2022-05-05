import * as cardsActionCreators from './cards';
import * as authActionCreators from './auth';

const actionCreator = {
  ...cardsActionCreators,
  ...authActionCreators,
};

export default actionCreator;
