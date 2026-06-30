# GST Calculator

A simple, client-side web app for calculating Indian GST (Goods and Services Tax) on an entered amount. The app displays the GST amount and the final total instantly.

## Features

- Calculates GST for standard Indian rates: 5%, 12%, 18%, and 28%
- Shows both the GST amount and the total amount including GST
- Formats the entered amount using the Indian numbering system
- Validates input and displays friendly error messages for invalid values
- Responsive layout for desktop and mobile screens
- Works entirely in the browser with no backend required

## Usage

1. Open [index.html](index.html) in your browser.
2. Enter an amount in the **Amount** field.
3. Select a GST percentage from the dropdown menu.
4. Click **Calculate**.
5. View the calculated GST amount and final total.

### Example

- Input: `1000`
- GST rate: `18%`
- Output: `GST amount: ₹180.00`, `Total: ₹1,180.00`

## Running Locally

For the best experience in modern browsers, serve the files from a local web server.

```bash
# Python 3
python -m http.server 8000

# Node.js (if http-server is installed)
npx http-server -c-1
```

Then open `http://localhost:8000` in your browser.

## Project Files

- `index.html` — HTML layout and form structure      
- `style.css` — styling and responsive design
- `script.js` — GST calculation and input formatting logic                       
- `README.md` — project documentation

## Contributing

Contributions are welcome! If you'd like to improve this project, please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes and commit them (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

Feel free to report bugs or suggest enhancements by opening an issue.

## License

This project is open source and available under the MIT License.

## Author

**Sarthak Dagar**  
Email: [sarthakdagar77@gmail.com](mailto:sarthakdagar77@gmail.com)

---

Built with ❤️ for [Digital Heroes](https://digitalheroesco.com)

Contributions are welcome. Open an issue or submit a pull request for bug fixes, enhancements, or documentation improvements.

## License

This project is provided for educational/demo use. No explicit license is included.


