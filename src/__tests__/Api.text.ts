import * as user from '../__mocks__/user';

jest.mock('../__mocks__/requester.ts');

// The assertion for a promise must be returned.
it('works with promises', async () => {
  expect.assertions(1);
  const userName: string = await user.getUserName(
    'ce9cac2e-e3be-4df9-a7ba-2fb1f99cc8fd'
  );
  return expect(userName).toEqual('Mark');
});
