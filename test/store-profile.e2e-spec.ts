import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Burger House' }).click()
  page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  page.getByLabel('Nome').fill('Vegan Burger')
  page.getByLabel('Descrição').fill('Vegan Description')
  page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const successToast = page.getByText('Perfil atualizado com sucesso!')
  await expect(successToast).toBeVisible()

  page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Vegan Burger' })).toBeVisible()
})

test('update profile with error', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Burger House' }).click()
  page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  page.getByLabel('Nome').fill('Wrong Name')
  page.getByLabel('Descrição').fill('Wrong Description')
  page.getByRole('button', { name: 'Salvar' }).click()

  const errorToast = page.getByText(
    'Falha ao atualizar o perfil, tente novamente.',
  )
  await expect(errorToast).toBeVisible()
})
