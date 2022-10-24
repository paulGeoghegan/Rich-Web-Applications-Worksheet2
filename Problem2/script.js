
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => response.json())
	.then(function(data) {
		console.log("Data array")
		console.log(data)



	});
