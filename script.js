function formatIndianNumberString(valueString) {
  const [integerPart = '', decimalPart] = valueString.toString().split('.');
  const trimmedInteger = integerPart.replace(/^0+(?=\d)/, '') || '0';
  const firstGroup = trimmedInteger.slice(-3);
  const otherGroups = trimmedInteger.slice(0, -3);
  const formattedOther = otherGroups ? otherGroups.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' : '';
  return decimalPart !== undefined ? `${formattedOther}${firstGroup}.${decimalPart}` : `${formattedOther}${firstGroup}`;
}

function formatIndianNumber(value) {
  return formatIndianNumberString(Number(value).toFixed(2));
}

function parseIndianNumber(value) {
  return parseFloat(value.replace(/,/g, ''));
}

function calculateGST() {
  const amountInput = document.getElementById('amount');
  const gstInput = document.getElementById('gst');
  const gstAmountEl = document.getElementById('gstAmount');
  const totalAmountEl = document.getElementById('totalAmount');

  const amount = parseIndianNumber(amountInput.value);
  const gstRate = parseFloat(gstInput.value);

  if (isNaN(amount) || amount < 0) {
    alert('Please enter a valid amount.');
    return;
  }

  const gstAmount = (amount * gstRate) / 100;
  const totalAmount = amount + gstAmount;

  gstAmountEl.textContent = `GST Amount: ₹${formatIndianNumber(gstAmount)}`;
  totalAmountEl.textContent = `Total Amount: ₹${formatIndianNumber(totalAmount)}`;
}

const amountInput = document.getElementById('amount');

function formatInputValue(input) {
  const cursorPosition = input.selectionStart;
  const rawValue = input.value.replace(/,/g, '');
  if (rawValue === '' || rawValue === '.') return;

  const [integerPart, decimalPart] = rawValue.split('.');
  const formattedInteger = formatIndianNumberString(integerPart);
  const formattedValue = decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  input.value = formattedValue;

  if (cursorPosition !== null) {
    const newCursor = formattedValue.length - rawValue.length + cursorPosition;
    input.setSelectionRange(newCursor, newCursor);
  }
}

amountInput.addEventListener('input', () => {
  const value = amountInput.value.replace(/,/g, '');
  if (value === '' || value === '.') return;
  const numeric = Number(value);
  if (!isNaN(numeric)) {
    formatInputValue(amountInput);
  }
});

amountInput.addEventListener('blur', () => {
  const value = amountInput.value.replace(/,/g, '');
  const numeric = parseFloat(value);
  if (!isNaN(numeric)) {
    amountInput.value = formatIndianNumberString(value);
  }
});

amountInput.addEventListener('focus', () => {
  amountInput.value = amountInput.value.replace(/,/g, '');
});

const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', calculateGST);
