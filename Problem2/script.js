
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => response.json())
	.then(function(data) {
		console.log("Data array")
		console.log(data)

		console.log("Titles with more than 6 words")
		filteredTitles = data.filter(checkWordCount)
		console.log(filteredTitles)

	});


function checkWordCount(value) {
	if(value.title.split().length > 6) {
		return value
	}
}
