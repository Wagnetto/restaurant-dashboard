import { test, expect } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Estabelecimento').fill('Burger House')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('5199999999')
  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()
  const successToast = page.getByText('Restaurante cadastrado com sucesso')
  await expect(successToast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('Jim Doe')
  await page.getByLabel('Seu e-mail').fill('jimdoe@example.com')
  await page.getByLabel('Seu celular').fill('01234')
  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const errorToast = page.getByText('Erro  ao cadastrar restaurante')

  await expect(errorToast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
