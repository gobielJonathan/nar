

$(".code").on('keypress', function (event) {
  //enter

  // if (event.key === "Enter") {
  //   const number = $("")
  //   $(number).text(12)
  //   $("div.line-numbers").append(number)
  // }

  
  if (event.key === " ") {

    const val = $(".code").text()
    const lastIdx = val.lastIndexOf(" ")
    const subLen = lastIdx == -1 ? val.length :  val.length - lastIdx - 1
    const word = val.substr(-subLen).trim()
    if(word.length > 0){
      $(".code").append(`<span>${word}</span>`)
      $(".code").focus()
    }
  }

})