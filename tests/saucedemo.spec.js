import { test, expect } from '@playwright/test';

test('e2e login, add to cart, and checkout', async ({ page }) => {
  // 1. Navigasi ke halaman login
  await page.goto('https://www.saucedemo.com/');
  
  // Assertion untuk memastikan halaman login terbuka
  await expect(page.locator('.login_logo')).toContainText('Swag Labs'); // Memastikan judul halaman mengandung "Swag Labs"
  await expect(page.locator('#login-button')).toBeVisible(); // Memastikan tombol login terlihat

  // 2. Login dengan username dan password yang valid
  await page.fill('#user-name', 'standard_user'); // Username
  await page.fill('#password', 'secret_sauce'); // Password
  await page.click('#login-button'); // Klik tombol login

  // Assertion untuk memastikan halaman setelah login terbuka
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Memastikan URL mengarah ke halaman inventory
  await expect(page.locator('.inventory_list')).toBeVisible(); // Memastikan daftar produk terlihat

  // 3. Klik tombol "Add to Cart" pada item pertama
  await page.click('.inventory_item:first-child .btn_inventory'); // Klik "Add to cart" untuk item pertama
  
  // Assertion untuk memastikan item berhasil ditambahkan ke keranjang
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); // Memastikan ada 1 item di keranjang

  // 4. Klik ikon keranjang untuk masuk ke halaman Cart
  await page.click('.shopping_cart_link'); // Klik ikon keranjang untuk menuju halaman Cart
  
  // Assertion untuk memastikan halaman Cart terbuka
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html'); // Memastikan URL mengarah ke halaman cart
  await expect(page.locator('.cart_list')).toBeVisible(); // Memastikan item keranjang terlihat

  // 5. Klik tombol "Checkout"
  await page.click('.checkout_button'); // Klik tombol Checkout
  
  // Assertion untuk memastikan halaman Checkout muncul
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html'); /// Memastikan URL mengarah ke halaman checkout

  // 6. Assertion untuk memeriksa teks pada header dengan class '.title'
  await expect(page.locator('.title')).toContainText('Checkout: Your Information');
});
