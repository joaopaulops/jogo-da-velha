/***********************
 *
 *  Configuration
 *
 ***********************/

// Page Info [If it's a onepage app, if not, remove]
const pages = document.querySelectorAll('.page-example');
var scroll = 0;
var itemMaxLength = 0;

// Menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Link
const link = menu.querySelectorAll('a');

// Decor Element
var background;
const character = menu.querySelector('.menu__character');
var box;

// Movement Element
const moveLeft = document.querySelector('.menu__left');
const moveRight = document.querySelector('.menu__right');

// Decor Information
var boxWidth;

// Session Information
const speed = 10;
var maxCursor;
var movementId = null;
var menuPosition = 1;
var backgroundPosition;
var minPosition = 0;
var maxPosition;

// Page Size Initialization [If it's a onepage app, if not, remove]
for (var i = 0; i < pages.length; i++) {
    pages[i]['minLength'] = itemMaxLength;
    pages[i]['maxLength'] = itemMaxLength + pages[i].offsetHeight;
    itemMaxLength += pages[i].offsetHeight;
}

/***********************
 *
 *  Function
 *
 ***********************/

// Initialization
function init(){

    // Decor Element
    background = menu.querySelector('.menu__background');
    box = menu.querySelectorAll('.menu__box');

    // Decor Information
    boxWidth = box[0].offsetWidth;

    // Session Information
    maxCursor = -box.length * boxWidth - boxWidth;
    backgroundPosition = -boxWidth * menuPosition;
    maxPosition = boxWidth + speed - background.offsetWidth;

    backgroundPositionUpdate();
}

// Show menu
function showMenu(){
    menu.classList.toggle('menu--show');
    init();
    hamburger.classList.toggle('hamburger--flip');
    hamburger.classList.toggle('hamburger--active');
    character.classList.add('menu__character--coming');
    setTimeout(function(){ hamburger.classList.toggle('hamburger--flip'); }, 1000);
}

// Update the background position
function backgroundPositionUpdate(){
    background.style.left = backgroundPosition + 'px';
}

/*
 * Give animation class to character
 * @param direction => [left or right] ; toggle => [add or remove]
 */
function movementStyle(direction, toggle){

    character.classList.remove('menu__character--coming');

    if(direction === "left"){

        if(toggle === "add"){
            character.classList.add('menu__character--left');
            character.classList.add('menu__character--walk');
        }else if(toggle === "remove"){
            character.classList.remove('menu__character--walk');
        }

    }else if(direction === "right"){

        if(toggle === "add"){
            character.classList.remove('menu__character--left');
            character.classList.add('menu__character--walk');
        }else if(toggle === "remove"){
            character.classList.remove('menu__character--walk');
        }

    }

}

/*
 * Move the background
 * @param direction => [left or right]
 */
function movement(direction){

    var startPosition = backgroundPosition;
    var resetPosition = false;

    if(movementId !== null){
        return;
    }

    if(direction === "left"){

        var Position = startPosition+boxWidth;
        movementStyle('left', 'add');

        if(menuPosition === 1){
            menuPosition = box.length;
        }else{
            menuPosition--;
        }

        movementId = setInterval(function(){

            if(Position >= minPosition){

                if(backgroundPosition >= minPosition){
                    backgroundPosition = maxPosition;
                    return resetPosition = true;
                }

                if(resetPosition === true){
                    if(maxCursor+boxWidth <= backgroundPosition){
                        resetPosition = false;
                        movementStyle('left', 'remove');
                        clearInterval(movementId);
                        return movementId = null;
                    }
                }

            }else{

                if(Position <= backgroundPosition){
                    movementStyle('left', 'remove');
                    clearInterval(movementId);
                    return movementId = null;
                }
            }

            backgroundPosition += speed;
            backgroundPositionUpdate();

        }, 50);

    }else if(direction === "right"){

        var Position = startPosition-boxWidth;
        movementStyle('right', 'add');

        if(menuPosition === box.length){
            menuPosition = 1;
        }else{
            menuPosition++;
        }

        movementId = setInterval(function(){

            if(Position <= maxPosition){

                if(backgroundPosition <= maxPosition){
                    backgroundPosition = minPosition;
                    return resetPosition = true;
                }

                if(resetPosition === true){
                    if(-boxWidth >= backgroundPosition){
                        resetPosition = false;
                        movementStyle('right', 'remove');
                        clearInterval(movementId);
                        return movementId = null;
                    }
                }

            }else{
                if(Position >= backgroundPosition){
                    movementStyle('right', 'remove');
                    clearInterval(movementId);
                    return movementId = null;
                }
            }

            backgroundPosition -= speed;
            backgroundPositionUpdate();

        }, 50);

    }

}


/***********************
 *
 *  Listener
 *
 ***********************/

moveLeft.addEventListener('click', function(){
    movement('left');
});

moveRight.addEventListener('click', function(){
    movement('right');
});

hamburger.addEventListener('click', function(){
    showMenu();
});

for(var i = 0;i < link.length;i++){
    link[i]["pageId"] = i+1;
    link[i].addEventListener('click', function(){
        menuPosition = this["pageId"];
        showMenu();
    })
}

window.addEventListener('scroll', function(){

    scroll = window.scrollY;

    for (var i = 0; i < pages.length; i++) {
        if(scroll >= pages[i]['minLength'] && scroll <= pages[i]['maxLength']){
            menuPosition = i+1;
        }
    }

});