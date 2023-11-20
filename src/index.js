import './style.css'

//objects for example
const headsAndLinks = {headOne: '#', headTwo: '##', headThree: '###', headFour: '####', headFive: '#####'}
const subHeadsAndLinks = {headSix: '#', headSeven: '##', headEigth: '###', headNine: '####', headTen: '#####'}

/* Main function 'myMenu' create dropmenu in a chosen element of static topMenu (parameter 'numElemMenu') by it's number
(static topMenu have to be composed of four elements, index of the 1st element is 0). 
Dropmenu fills up with the data from given object (parameter 'menuObject'). 
Object have to include pairs {texcontent: href} of HTMLelements <a> */

/* Function also can create submenu when it takes third and four parameters. They determine
parent element in dropMenu for placing submenu there (parameter 'numElemSubMenu')
and also object with texcontents and hrefs for submenu elements */

function myMenu (menuObject, numElemMenu, submenuObject, numElemSubMenu) {
    addDropdownToMenuElement(numElemMenu, menuObject)
    addSubmenuToDropElement(numElemSubMenu, submenuObject)
}

//examples of using
myMenu(headsAndLinks, 3, subHeadsAndLinks, 4)
myMenu(headsAndLinks, 1, subHeadsAndLinks, 2)

//DropMenu appears when cursor is over element 
function mouseover (element, dropMenu) {
    element.addEventListener('mouseover', function () {
        dropMenu.style.visibility = 'visible'
    })
}
//DropMenu disappear when cursor leaves element or it's children
function mouseout (element, dropMenu) {
    element.addEventListener('mouseout', function () {
        dropMenu.style.visibility = 'hidden'
    })
}

/* Create dropMenu with the given object (pairs {texcontent: link} of the <a> HTMLelement)
and given direction of menu movement (down, right or left) */
function createDropMenu (object, direction) {
    const dropMenu = document.createElement('div')
    if (direction === 'down') dropMenu.classList.add('dropDown')
    else if ((direction === 'right')) dropMenu.classList.add('dropRight')
    else if ((direction === 'left')) dropMenu.classList.add('dropLeft')
    for (const key in object) {
        const dropElement = document.createElement('div')
        dropElement.classList.add('dropelement')
        const link = document.createElement('a')
        link.textContent = `${key}`
        link.setAttribute('href', `${object[key]}`)
        dropElement.append(link)
        dropMenu.append(dropElement)
    }
    return dropMenu
}

//Add dropDown menu to chosen element by it's number
function addDropdownToMenuElement (elementNumber, dropDownObject) {
    const element = document.querySelectorAll('.elementmenu')[elementNumber]
    const dropMenu = createDropMenu(dropDownObject, 'down')
    mouseover(element, dropMenu)
    mouseout(element, dropMenu)
    element.append(dropMenu)
    /* Pass element number to dropelement as id to using it in function 'createSubMenu',
    number of parent element determines where will moove submenu (left or right)*/
    const dropElements = document.getElementsByClassName('dropelement')
    for (const elem of dropElements) elem.dataset.id = `${elementNumber}`
}

//create submenu with the given object (pair {texcontent: link} of the <a> element)
function createSubMenu (objectForSubMenu) {
    const dropElements = document.getElementsByClassName('dropelement')
    let submenu
    if (dropElements[0].dataset.id < 2) {
        submenu = createDropMenu(objectForSubMenu, 'right')
    }//if 0th and 1th menu element, then submenu move right
    if (dropElements[0].dataset.id >= 2) {
    submenu = createDropMenu(objectForSubMenu, 'left')
    }//if 2th and 3th menu element, then submenu move left
    return submenu
}

//add submenu to chosen dropmenu element 
//with given number of dropmenu element and given object (pair {texcontent: link} of the <a> element)
function addSubmenuToDropElement (dropElementNumber, submenuObject) {
    const dropElement = document.querySelectorAll('.dropelement')[dropElementNumber]
    dropElement.querySelector('a').textContent += ' >>'
    const submenu = createSubMenu(submenuObject)
    mouseover(dropElement, submenu)
    mouseout(dropElement, submenu)
    dropElement.append(submenu)
}













