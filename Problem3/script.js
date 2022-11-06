
document.getElementById("submitUserName").addEventListener("click", function() {

	//Gets username to use with fetch
	userName = document.getElementById("searchUserName").value

	//Uses fetch to get user info
	fetch('https://api.github.com/users/'+userName).then((response) => response.json())
	.then(function(data) {
		console.log("User")
		console.log(data)

	//Sends user info to makeTable function
	makeTable(data)

	});
});


//Creates columns on DOM to display user info
function makeTable(user) {

	document.getElementById("userInfo").innerHTML=`

	<div>
		<div class="block">
			<h2> User Profile </h2>
			<img src="`+user.avatar_url+`" alt="Profile Picture" width="25%" height="25%"></img></br>
			Name: `+user.name+`</br>
			User Name: `+user.login+`</br>
			Email: `+user.email+`</br>
			Location: `+user.location+`</br>
			Number of Gists: `+user.public_gists+`</br>

		</div>

		<div class="block">
			<h2> User Repos </h2>
			<div id="repoListDiv"> </div>
		</div>
	</div>

`

	document.getElementById("repoListDiv").appendChild(repoTableMaker(user.repos_url))

}


//This creates the repo table
function repoTableMaker(repoListUrl) {

	repoTable = document.createElement("table")

	fetch(repoListUrl).then((response) => response.json())
	.then(function(data) {
		console.log(data)
		repos = data.filter(getRepos)
		repos.forEach(function(element) {
			repoTable.innerHTML+=`<tr> <td>`+element+`</td> <td>`+element[1]+`</td> </tr>`
		});
	});
	return repoTable
}


//This function will return each repo name and description
function getRepos(value) {
	repo = [value.name,String(value.description)]
	console.log(repo)
	return repo
}