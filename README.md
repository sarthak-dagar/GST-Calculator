# GST Calculator

A simple Indian GST calculator web app that computes GST and the final total amount for a given amount.

## Features

- Calculates GST for 5%, 12%, 18%, and 28%
- Displays both GST amount and total amount
- Formats amount input with Indian numbering style (commas in the right places)
- Validates the amount and shows an alert for invalid input
- Clean responsive layout with a branded footer and external link

## How to use

1. Open `index.html` in your browser.
2. Enter the amount in the `₹ Amount` field.
3. Choose a GST rate from the dropdown menu.
4. Click the `Calculate` button.
5. The GST amount and total amount appear below the button.

## Project files

- `index.html` — page layout and form elements
- `style.css` — responsive styling and presentation
- `script.js` — GST calculation and Indian number formatting logic
- `README.md` — project overview and instructions

## Notes

- The amount input is formatted with commas while typing and again on blur.
- Clicking the `Calculate` button performs GST calculation only when a valid amount is entered.
- The app is intended for quick GST estimation and educational use.

