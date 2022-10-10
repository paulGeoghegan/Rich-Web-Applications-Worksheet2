
let nameDirection = 0
let phoneDirection = 0

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
	var count

	do{
		let rows = document.getElementById("contactTable").rows
		let count = 0

		//Loops through rows making sure to skip the first one as that is just the table headers
		for(let i = 1;i < (rows.length-1);i++) {
			r1 = rows[i].getElementsByTagName("td")[column]
			r2 = rows[i+1].getElementsByTagName("td")[column]
			console.log("is "+r2.innerHTML+" Greater than "+r2.innerHTML)
			//Checks if rows need to be swapped
			if(r1.innerHTML.toLowerCase > r2.innerHTML.toLowerCase) {
				rows[i].parentNode.insertBefore(rows[i+1], rows[i])
				count++
			}
		}
	}
	while(count > 0)

}