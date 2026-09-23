# POS Billing App

A simple point-of-sale app for a small shop: tap items to bill a customer, track stock, and see sales history — all stored on the device, no internet or backend required.

## What it does
- **Billing tab** — tap an item to add it to the cart, adjust quantity, complete the sale.
- **Inventory tab** — add, edit, delete items (name, price, stock).
- **History tab** — see today's total and every past sale, tap one to see its item breakdown.

Data is saved on-device with AsyncStorage, so it survives app restarts and works fully offline.

## How to run it
1. Install [Node.js](https://nodejs.org) if you don't have it.
2. Install the Expo CLI tools (one time): they come bundled, no separate install needed.
3. In this folder, run:
   ```
   npm install
   npx expo start
   ```
4. Install the **Expo Go** app on your phone (Play Store / App Store), then scan the QR code shown in the terminal. The app opens live on your phone.

## Customizing for your shop
- Starts with 3 sample items — delete or edit them from the Inventory tab.
- Prices are in ₹ (rupees) — change the symbol in `src/screens/POSScreen.js` and `HistoryScreen.js` if needed.
- Colors and spacing live in `src/theme.js`.

## Publishing to the app stores
When you're ready for a real install file:
```
npx eas build --platform android   # or ios
npx eas submit
```
This needs a free Expo account (`npx eas login`) and, for the App Store, an Apple Developer account.
