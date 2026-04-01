function priceCalculate() {
  let tickets = parseInt(document.getElementById("ticknum").value);

  let selectObj = document.getElementById("event");
  let selectedOption = selectObj.options[selectObj.selectedIndex];

  let pricePerTicket = parseFloat(selectedOption.getAttribute("data-price"));

  let total = tickets * pricePerTicket;

  total = Math.round(total * 100) / 100; // ปัดเศษ 2 ตำแหน่ง

  return total;
}