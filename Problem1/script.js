
let sort = [1, 1]

//Adds new contact
document.getElementById("addContact").addEventListener("click", function(){

	let name = document.getElementById("contactName").value
	let phone = document.getElementById("contactNumber").value
	let email = document.getElementById("contactEmail").value

	if(name.length <= 20 && name.length > 0 && /^[A-Za-z\s]*$/.test(name) && phone.length == 10 && phone.length > 0 && /^[0-9]+$/.test(phone) && email.length < 40 && email.length > 0 && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {

		document.getElementById("contactTable").innerHTML+=`<tr> <td>`+name+`</td> <td>`+phone+`</td> <td>`+email+`</td> </tr>`
		document.getElementById("error").innerHTML=""
		document.getElementById("contactName").value=""
		document.getElementById("contactNumber").value=""
		document.getElementById("contactEmail").value=""
		styleTable()
	}
	else {
		document.getElementById("error").innerHTML="<p> error </p>"
	}

});


function styleTable() {

		let rows = document.getElementById("contactTable").rows

		//Loops through rows making sure to skip the first one as that is just the table headers
		for(let i = 1;i < (rows.length);i++) {
			if(i%2 == 1 && rows[i].hidden == false) {
				rows[i].style.backgroundColor="#f2f2f2"
			}
			else {
				rows[i].style.backgroundColor="white"
			}
		}

}


function sortTable(column) {
	var count

	do{
		let rows = document.getElementById("contactTable").rows
		let count = 0

		//Loops through rows making sure to skip the first one as that is just the table headers
		for(let i = 1;i < (rows.length-1);i++) {
			r1 = rows[i].getElementsByTagName("td")[column]
			r2 = rows[i+1].getElementsByTagName("td")[column]
			//Checks what direction to sort in
			if(sort[column] == 1) {
				console.log("is "+r1.innerHTML+" Greater than "+r2.innerHTML)
				//Checks if rows need to be swapped
				if(r1.innerHTML.toLowerCase() > r2.innerHTML.toLowerCase()) {
					console.log("true")
					rows[i].parentNode.insertBefore(rows[i+1], rows[i])
					count++
				}
				else {
					console.log("false")
				}
			}
			else {
				console.log("is "+r1.innerHTML+" less than "+r2.innerHTML)
				//Checks if rows need to be swapped
				if(r1.innerHTML.toLowerCase() < r2.innerHTML.toLowerCase()) {
					console.log("true")
					rows[i].parentNode.insertBefore(rows[i+1], rows[i])
					count++
				}
				else {
					console.log("false")
				}
			}
		}
	}
	while(count > 0)

	//This will invert the sorting direction for the column
	sort[column]*=-1

	styleTable()

}


document.getElementById("searchMobile").addEventListener("input", function(){
	let userInput = String(document.getElementById("searchMobile").value)
		let rows = document.getElementById("contactTable").rows
		let hiddenRows = 0

	document.getElementById("noResults").hidden=true

	//Checks if the field is a number and if length is > 0
	if(userInput.length > 0 && /^[0-9]+$/.test(userInput)) {
		//Loops through rows making sure to skip the first one as that is just the table headers
		for(let i = 1;i < (rows.length);i++) {
			if(!rows[i].getElementsByTagName("td")[1].innerHTML.startsWith(userInput)) {
				rows[i].hidden=true
				console.log("Hiding row:"+i+" as "+rows[i].getElementsByTagName("td")[1].innerHTML+" Does not contain "+userInput)
				hiddenRows++
			}
			else {
				rows[i].hidden=false
				console.log("Unhiding row:"+i)
			}
		}
	}
	else if(userInput.length == 0) {
		for(let i = 1;i < (rows.length);i++) {
				rows[i].hidden=false
				console.log("Unhiding row:"+i)
		}
	}

	if(hiddenRows == rows.length - 1) {
			document.getElementById("noResults").hidden=false
	}

	styleTable()

});
