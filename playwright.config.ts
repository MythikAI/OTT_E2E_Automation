import { defineConfig } from '@playwright/test';

const now = new Date();
const pad = (n) => n.toString().padStart(2, '0');
const dateStr = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

export default defineConfig({
  use: {
    baseURL: 'https://d2c.mythik.app', //http://44.202.105.83 
    storageState: 'auth.json',
  },
  reporter: [['html', { outputFolder: `playwright-report/${dateStr}`, open: 'never' }]],
});