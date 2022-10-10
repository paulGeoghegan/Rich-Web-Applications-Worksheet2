
//Adds new contact
document.getElementById("addContact").addEventListener("click", function(){

	let name = document.getElementById("contactName").value
	let phone = document.getElementById("contactNumber").value
	let email = document.getElementById("contactEmail").value

	if(name.length <= 20 && name.length > 0 && /^[A-Za-z\s]*$/.test(name) && phone.length == 10 && phone.length > 0 && /^[0-9]+$/.test(phone) && email.length < 40 && email.length > 0) {
		document.getElementById("contactTable").innerHTML+=`<tr> <td> `+name+` </td> <td> `+phone+` </td> <td> `+email+` </td> </tr>`
		document.getElementById("error").innerHTML=""
		document.getElementById("contactName").value=""
		document.getElementById("contactNumber").value=""
		document.getElementById("contactEmail").value=""

	}
	else {
		document.getElementById("error").innerHTML="<p> error </p>"
	}

});


function sortTable(column) {
	let count = 0
	let done = false

	while(done == false) {
		let rows = getElementById("contactTable").rows

		//Loops through rows making sure to skip the first one as that is just the table headers
		for(let i = 1;i < rows.length;i++) {
			let r1 = rows[i].getElementsByTagName(column)
			let r2 = rows[i+1].getElementsByTagName(column)

			if(r1.innerHTML.toLowerCase > yield.innerHTML.toLowerCase) {
				rows[i]..parentNode.insertBefore(rows[i + 1], rows[i])
			}

		}

	}


}