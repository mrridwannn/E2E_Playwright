
# 🚀 Playwright Setup + Tes Login SauceDemo

Setup Playwright dari awal sampai bisa ngetes login ke [saucedemo.com](https://www.saucedemo.com/).  

---

## ✅ 1. Clone Project dari GitHub

Jika belum punya project-nya, mulai dengan clone repository dari GitHub:

```bash
git clone https://github.com/mrridwannn/E2E_Playwright.git
cd project-name
```


---

## ✅ 2. Persiapan Awal

Pastikan kamu sudah install:

- [Node.js](https://nodejs.org/) (versi 14+)
- Terminal atau Git Bash

Cek apakah Node.js dan npm sudah terpasang dengan menjalankan perintah berikut di terminal:

```bash
node -v
npm -v
```

Kalau muncul versi, berarti kamu siap untuk lanjut ke langkah berikutnya.

---

## 📁 3. Inisialisasi Project (Jika Belum)

Kalau project baru, buat dulu project-nya:

```bash
mkdir playwright-saucedemo
cd playwright-saucedemo
npm init -y
```

---

## 📦 4. Install Playwright

Install Playwright dan semua dependensinya:

```bash
npm install -D @playwright/test
npx playwright install
```

---

## ▶️ 5. Jalankan Tes Playwright

Setelah selesai menginstal, bisa mulai jalankan test yang sudah ada, misalnya `saucedemo.spec.js`.

Untuk menjalankan semua test:

```bash
npx playwright test
```

Atau, untuk menjalankan test tertentu, seperti `saucedemo.spec.js`:

```bash
npx playwright test tests/saucedemo.spec.js
```

Kalau  lebih suka menggunakan **Playwright UI** untuk memilih dan menjalankan test, bisa jalankan:

```bash
npx playwright test --ui
```

Dengan Playwright UI, bisa lihat hasil test langsung secara visual dan pilih test mana yang ingin dijalankan.

---

Sekarang sudah siap untuk menjalankan automation test menggunakan Playwright!
