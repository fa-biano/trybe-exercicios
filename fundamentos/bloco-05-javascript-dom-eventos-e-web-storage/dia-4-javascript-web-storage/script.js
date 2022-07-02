let colorOption = document.querySelectorAll('.circle');
let body = document.body

function changeBgColor(event) {
  let setBgColor
  for (let index = 0; index < 3; index += 1) {
    if (event.target === colorOption[index]) {
      if (index === 0) {
        setBgColor = 'black'
      } else if (index === 1) {
        setBgColor = 'white'
      } else {
        setBgColor = 'blue'
      }
    }
  }

  body.style.backgroundColor = setBgColor;
}

colorOption[0].addEventListener('click', changeBgColor)
colorOption[1].addEventListener('click', changeBgColor)
colorOption[2].addEventListener('click', changeBgColor)

function changeColorText(event) {
  let setColorText
  for (let index = 3; index < 6; index += 1) {
    if (event.target === colorOption[index]) {
      if (index === 3) {
        setColorText = 'black'
      } else if (index === 4) {
        setColorText = 'white'
      } else {
        setColorText = 'blue'
      }
    }
  }
  
  body.style.color = setColorText;
}

colorOption[3].addEventListener('click', changeColorText)
colorOption[4].addEventListener('click', changeColorText)
colorOption[5].addEventListener('click', changeColorText)