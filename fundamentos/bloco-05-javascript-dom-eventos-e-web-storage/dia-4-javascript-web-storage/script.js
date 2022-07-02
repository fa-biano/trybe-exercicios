let body = document.body
let colorOption = document.getElementById('bg-color');
let colorTextOption = document.getElementById('color-text');
let fontSizeOptions = document.getElementById('font-size');
let lineHeightOptions = document.getElementById('line-height');
let paragraghs = document.getElementsByTagName('p')
let fontFamilyOptions = document.getElementById('font-family');

function changeBgColor(event) {
  let setBgColor
  for (let index = 0; index < colorOption.children.length; index += 1) {
    if (event.target === colorOption.children[index]) {
      if (index === 0) {
        setBgColor = 'black';
      } else if (index === 1) {
        setBgColor = 'white';
      } else {
        setBgColor = 'blue';
      }
    }
  }

  body.style.backgroundColor = setBgColor;
}

function changeColorText(event) {
  let setColorText
  for (let index = 0; index < colorTextOption.children.length; index += 1) {
    if (event.target === colorTextOption.children[index]) {
      if (index === 0) {
        setColorText = 'black'
      } else if (index === 1) {
        setColorText = 'white'
      } else {
        setColorText = 'blue'
      }
    }
  } 
  
  body.style.color = setColorText;
}

function changeFontSize(event) {
  let setTextSize
  for (let index = 0; index < fontSizeOptions.children.length; index += 1) {
    if (event.target === fontSizeOptions.children[index]) {
      if (index === 0) {
        setTextSize = '0.8em'
      } else if (index === 1) {
        setTextSize = '1.0em'
      } else {
        setTextSize = '1.5em'
      }
    }
  }
  body.firstElementChild.nextElementSibling.style.fontSize = setTextSize;
}

function changeLineHeight(event) {
  let setLineHeight
  for (let index = 0; index < lineHeightOptions.children.length; index += 1) {
    if (event.target === lineHeightOptions.children[index]) {
      if (index === 0) {
        setLineHeight = '16px'
      } else if (index === 1) {
        setLineHeight = '25px'
      } else {
        setLineHeight = '32px'
      }
    }
  }

  for (let paragragh of paragraghs) {
    paragragh.style.lineHeight = setLineHeight
  }
}

function changeFontFamily(event) {
  let setFontFamily
  for (let index = 0; index < fontFamilyOptions.children.length; index += 1) {
    if (event.target === fontFamilyOptions.children[index]) {
      if (index === 0) {
        setFontFamily = 'Arial'
      } else if (index === 1) {
        setFontFamily = '"Times New Roman"'
      } else {
        setFontFamily = 'cursive'
      }
    }
  }
  body.children[0].style.fontFamily = setFontFamily;
  body.children[1].style.fontFamily = setFontFamily;
}

colorOption.addEventListener('click', changeBgColor);
colorTextOption.addEventListener('click', changeColorText);
fontSizeOptions.addEventListener('click', changeFontSize);
lineHeightOptions.addEventListener('click', changeLineHeight);
fontFamilyOptions.addEventListener('click', changeFontFamily);