import { test, expect } from '@playwright/test';

test('GET user trả về status 200', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data.email).toBeTruthy();
});