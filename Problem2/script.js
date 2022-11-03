
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
	wordCheck = value.title.split(" ")
	if(wordCheck.length > 6) {
		console.log(wordCheck.join(" "))
		return true
	}
}
