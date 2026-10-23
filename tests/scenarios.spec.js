
const { test, expect } = require('@playwright/test');

test.describe('Playwright 102 Assignment', () => {

  test('Scenario 1 - Simple Form Demo', async ({ page }) => {

    await page.goto(
      'https://www.testmuai.com/selenium-playground/'
    );

    await page.getByText('Simple Form Demo').click();

    await expect(page).toHaveURL(/simple-form-demo/);

    const message = 'Welcome to TestMu AI';

    await page.locator('#user-message').fill(message);

    await page.getByRole('button', {
      name: 'Get Checked Value'
    }).click();

    await expect(page.locator('#message')).toHaveText(message);

  });


  test('Scenario 2 - Drag and Drop Sliders', async ({ page }) => {

    await page.goto(
      'https://www.testmuai.com/selenium-playground/'
    );

    await page.getByText('Drag & Drop Sliders').click();

    const slider = page.locator(
      'input[value="15"]'
    );

    await slider.evaluate((element) => {
      element.value = 95;

      element.dispatchEvent(
        new Event('input', { bubbles: true })
      );

      element.dispatchEvent(
        new Event('change', { bubbles: true })
      );
    });

    await expect(
      page.locator('#range')
    ).toHaveText('95');

  });


  test('Scenario 3 - Input Form Submit', async ({ page }) => {

    await page.goto(
      'https://www.testmuai.com/selenium-playground/'
    );

    await page.getByText('Input Form Submit').click();

    await page.getByRole('button', {
      name: 'Submit'
    }).click();

    await expect(
      page.locator('input[name="name"]')
    ).toHaveAttribute('required', '');

    await page.locator('input[name="name"]').fill(
      'Test User'
    );

    await page.locator('input[name="email"]').fill(
      'testuser@example.com'
    );

    await page.locator('input[name="password"]').fill(
      'Test@123'
    );

    await page.locator('input[name="company"]').fill(
      'Test Company'
    );

    await page.locator('input[name="website"]').fill(
      'https://example.com'
    );

    await page.locator('select[name="country"]').selectOption({
      label: 'United States'
    });

    await page.locator('input[name="city"]').fill(
      'New York'
    );

    await page.locator('input[name="address"]').fill(
      '123 Test Street'
    );

    await page.locator('input[name="state"]').fill(
      'New York'
    );

    await page.locator('input[name="zip"]').fill(
      '10001'
    );

    await page.locator('textarea[name="comment"]').fill(
      'This is a Playwright assignment.'
    );

    await page.getByRole('button', {
      name: 'Submit'
    }).click();

    await expect(
      page.getByText(
        'Thanks for contacting us, we will get back to you shortly.'
      )
    ).toBeVisible();

  });

});
