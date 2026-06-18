function formatIndianNumber(value) {
  const [integerPart, decimalPart] = Number(value).toFixed(2).split('.');
  const firstGroup = integerPart.slice(-3);
  const otherGroups = integerPart.slice(0, -3);
  const formattedOther = otherGroups ? otherGroups.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' : '';
  return `${formattedOther}${firstGroup}${decimalPart ? '.' + decimalPart : ''}`;
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
amountInput.addEventListener('blur', () => {
  const value = amountInput.value.replace(/,/g, '');
  const numeric = parseFloat(value);
  if (!isNaN(numeric)) {
    amountInput.value = formatIndianNumber(numeric);
  }
});

amountInput.addEventListener('focus', () => {
  amountInput.value = amountInput.value.replace(/,/g, '');
});

const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', calculateGST);
