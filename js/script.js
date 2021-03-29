'use strict';

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault()

        const sentence = $("#form-entry").val()
        const words = sentence.split(" ")
        const newSentence = words.filter(word => word.length > 3)
        console.log(newSentence)
        const reverseArray = newSentence.reverse()
        console.log(reverseArray)
        const combineArray = newSentence.push(reverseArray)
        // newSentence = words.forEach(function (word) {
        //     newSentence.filter(word => word.length > 3)
        // })

        console.log(words)
        console.log(sentence)
        $("#result").show()
    })
})