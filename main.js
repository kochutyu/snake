// const field = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];


function Game() {
    this.initField = (fields, generateToElement) => {
        fields.forEach((field) => {
            generateToElement.innerHTML += this.getBlock(field);
        });
    }

    this.initFieldCoords = (fields, fieldsCoords) => {
        fields.forEach((field) => fieldsCoords.push({
            rect: field.getBoundingClientRect()
        }));
    }

    this.getBlock = (value) => {
        return `<div class="block">${value}</div>`;
    }
}

function Snake() {
    this.initSnake = (generateToElement, coords) => {
        return generateToElement.innerHTML += this.snakeBodyPart(coords);
    }

    this.snakeBodyPart = (option) => {
        console.log(option);
        return `<div class="body-snake" 
                    style = "top: ${option.rect.top}px; 
                    right: ${option.rect.right - option.rect.width}px"
                >${option.value ? option.value : ''}</div>`
    }
}

function InitFunctional() {
    this.eventHendler = (typeEvent, elements) => {
        elements.forEach((field, i, filds) => {
            field.addEventListener(typeEvent, (event) => {
                console.log(event.target, typeEvent);
                return {
                    lol: 1
                }
            });
        })
    }
}

// ============================================ //
//                  INIT GAME                   //
// ============================================ //

// CLASS
const _game = new Game();
const _snake = new Snake();
const _init = new InitFunctional();

// DOM
const container = document.getElementById('container');

// CONFIG
const field = new Array(100).fill(0).map((v, i) => i + 1);
const snake = [];

// INFO
const fieldsCoords = [];

// GAME CONSTRUCTOR
_game.initField(field, container);
_game.initFieldCoords([...container.children], fieldsCoords);

let count = 20;
setInterval(function () {
    // body
    if (count < 100) {
        snake.push(_snake.initSnake(container, fieldsCoords[count]));
        count++;
    }
}, 100);

_init.eventHendler('click', [...container.children]);

console.log(fieldsCoords);
console.log(snake);