"use strict";
const SQUARES_NUMBER = 500
const board = document.querySelector("#board"),
  colors = ["#EFB9AD", "#F5704A", "#BC0000", "#680003", "#828D00"],
  body = document.getElementById('body'),
  form = document.createElement("form"),
  input = document.createElement("input"),
  btn = document.createElement("btn")

function renderSquare(numberOfSquare) {
  for (let i = 0; i < numberOfSquare; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
      setColor(square)
    })
    square.addEventListener('mouseleave', () => {
      removeColor(square)
    })

    board.append(square)
  }
}
renderSquare(SQUARES_NUMBER)

const square = document.querySelector('div')

function deleteSquare(numberOfSquare) {
  for (let i = 0; i < numberOfSquare; i++) {
    board.removeChild(square)
  }
}


function setColor(element) {
  const randomColor = getRandomColor()
  element.style.background = randomColor
  element.style.boxShadow = `0 0 2px ${randomColor},
  0 0 10px ${randomColor}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}