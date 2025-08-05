import { test, expect } from "@playwright/test";

test("Informs user that details were input incorrectly if bad username and password provided", async ({page}) => {
  await page.goto('http://localhost:5173');

  
  const username = page.locator("input").nth(0)
  await username.fill('baduser')

  const password = page.locator("input").nth(1)
  await password.fill("1")

  await page.click("button#login")

  await expect(page).toHaveURL('http://localhost:5173/login')
  const passwordFailText = page.locator("small").first()
  await expect(passwordFailText).toContainText(`Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.`)
})

test("Takes you to success page if correct login details are provided", async ({page}) => {
  await page.goto('http://localhost:5173');

  
  const username = page.locator("input").nth(0)
  await username.fill('user123')

  const password = page.locator("input").nth(1)
  await password.fill("password")

  await page.click("button#login")

  await expect(page).toHaveURL('http://localhost:5173/success')
})