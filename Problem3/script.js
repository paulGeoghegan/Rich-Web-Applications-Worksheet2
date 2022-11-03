
document.getElementById("submitUserName").addEventListener("click", function() {

	userName = document.getElementById("searchUserName").value
	fetch('https://api.github.com/users/'+userName).then((response) => response.json())
	.then(function(data) {
		console.log("User")
		console.log(data)

	makeTable(data)

	});
});

function makeTable(user) {

	document.getElementById("userInfo").innerHTML=`

	<div>
		<div class="block">
			<h2> User Profile </h2>
			<img src="`+user.	`"
		</div>

		<div class="block">
			<h2> User Repos </h2>
		</div>
	</div>

`

}