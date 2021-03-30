$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault()

        const sentence = $("#form-entry").val()
        const words = sentence.split(" ")
        console.log(words)
        const newSentence = words.filter(word => word.length > 3)
        console.log(newSentence)
        const reverseArray = newSentence.reverse()
        console.log(reverseArray)
        const combineArray = newSentence.concat(reverseArray)
        console.log(combineArray)
        const convertArray = combineArray.join(" ")
        console.log(convertArray)

        $("#result").show()
        $("#result-paragraph").text(convertArray)
    })
})