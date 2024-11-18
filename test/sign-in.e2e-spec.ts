import { test, expect } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()
  const successToast = page.getByText(
    'Estamos enviando um link de autenticação ara seu e-mail',
  )
  await expect(successToast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrongMail@example.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const errorToast = page.getByText('Credenciais Inválidas.')

  await expect(errorToast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})
