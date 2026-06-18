function calculateGST() {
  const amountInput = document.getElementById('amount');
  const gstInput = document.getElementById('gst');
  const gstAmountEl = document.getElementById('gstAmount');
  const totalAmountEl = document.getElementById('totalAmount');

  const amount = parseFloat(amountInput.value);
  const gstRate = parseFloat(gstInput.value);

  if (isNaN(amount) || amount < 0) {
    alert('Please enter a valid amount.');
    return;
  }

  const gstAmount = (amount * gstRate) / 100;
  const totalAmount = amount + gstAmount;

  gstAmountEl.textContent = `GST Amount: ₹${gstAmount.toFixed(2)}`;
  totalAmountEl.textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;
}

const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', calculateGST);
