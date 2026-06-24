# GST Calculator

A small, client-side web app for quickly estimating Indian GST (Goods and Services Tax) on an amount. It shows the GST amount and the final total.

**Features**

- Calculates GST for 5%, 12%, 18%, and 28%.
- Displays both the GST amount and the final total amount.
- Formats input using the Indian numbering system (commas inserted appropriately).
- Validates input and provides user-friendly feedback.
- Responsive, minimal UI suitable for desktop and mobile.

**Quick start**

1. Open [index.html](index.html) in your browser.
2. Enter an amount in the Amount field.
3. Select a GST percentage from the dropdown.
4. Click the Calculate button to see the GST and total.

If you prefer serving the files via a local web server (recommended for some browsers), run one of these from the project folder:

```bash
# Python 3
python -m http.server 8000

# or, with Node.js (if you have http-server installed)
npx http-server -c-1
```

Then open `http://localhost:8000` in your browser.

**Project structure**

- [index.html](index.html) — page layout and form elements
- [style.css](style.css) — styling and responsive layout
- [script.js](script.js) — GST calculation logic and input formatting
- [README.md](README.md) — this file

**Usage example**

1. Enter `1000` and select `18%` → GST amount: `₹180.00`, Total: `₹1,180.00`.

**Contributing**

Small improvements, bug reports, or formatting fixes are welcome — open a PR or edit the files directly.

**License**

This project is provided for educational/demo use. No license is specified.


