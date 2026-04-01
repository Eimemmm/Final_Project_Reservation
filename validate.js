function validateForm() {

	let nid = document.getElementById("nid").value.trim();
	let fname = document.getElementById("fname").value.trim();
	let lname = document.getElementById("lname").value.trim();
	let ticknum = document.getElementById("ticknum").value.trim();
  
	// ✅ check empty fields
	if (nid === "" || fname === "" || lname === "" || ticknum === "") {
	  alert("Please fill in all required fields");
	  return false;
	}
  
	if (!checkNID()) {
	  alert("National ID must be 13 digits");
	  document.getElementById("nid").focus();
	  return false;
	}
  
	if (!checkTicketNo()) {
	  alert("Number of tickets must be between 1 and 5");
	  document.getElementById("ticknum").focus();
	  return false;
	}

		let total = priceCalculate();
	  
		alert("Total price for this booking is " + total.toFixed(2) + " THB");
	  
		return true;
	  }
