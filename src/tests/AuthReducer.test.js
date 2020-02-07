import { token, isLoading, error } from 'modules/auth/reducer';

describe('AuthReducer', () => {
  let action;

  describe('Should token change', () => {
    it('Delete token when logout', () => {
      action = {
        type: 'LOGOUT',
      };
      expect(token({ token: 'asdasd' }, action)).toBe('');
    });
    it('Create token when authorize', () => {
      action = {
        type: 'AUTHORIZE_SUCCESS',
        payload: 'assdasdad',
      };
      expect(token({ token: '' }, action)).toBe(action.payload);
    });
  });

  describe('isLoading property should changed', () => {
    it('isLoading property - true, when authorize', () => {
      action = {
        type: 'AUTHORIZE',
      };
      expect(isLoading({ isLoading: false }, action)).toBe(true);
    });
    it('isLoading property - false, when authorize success', () => {
      action = {
        type: 'AUTHORIZE_SUCCESS',
      };
      expect(isLoading({ isLoading: true }, action)).toBe(false);
    });
    it('isLoading property - false, when authorize failure', () => {
      action = {
        type: 'AUTHORIZE_FAILURE',
      };
      expect(isLoading({ isLoading: true }, action)).toBe(false);
    });
  });

  describe('error property should change', () => {
    it('error property when authorize', () => {
      action = {
        type: 'AUTHORIZE',
      };
      expect(error({ error: 'Ошибка' }, action)).toBe(null);
    });
    it('error property when authorize', () => {
      action = {
        type: 'AUTHORIZE_FAILURE',
        payload: 'Ошибка',
      };
      expect(error({ error: null }, action)).toBe(action.payload);
    });
  });
});