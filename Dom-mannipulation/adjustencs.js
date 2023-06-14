//* insertAdjacentElement()

function insertElement () {
    const filter = document.querySelector('h1')
    const para = document.createElement('p')
    para.textContent = 'Added the text via insertAdjustcentElement'

    filter.insertAdjacentElement('afterend',para)
}
insertElement()

// insert Adjustance text 

function insertText () {
    const item = document.querySelector('li')

    item.insertAdjacentText('afterbegin', 'insertAdjustnceText')
}
insertText()

// insert adjustance HTML

function insertHTML () {
    const btn = document.querySelector('#btn')
    btn.insertAdjacentHTML('beforeend', '<h2>Upload your Files</h2>')
}

insertHTML();

// insert Before example

function insertBefore () {
    const ul = document.querySelector('ul')

    const li = document.createElement('li')
    li.textContent = 'insertBefore'

    const third = document.querySelector('li:nth-child(2)')
    ul.insertBefore(li, third)
}

insertBefore()

// Challange to create a element to insertAfter as same as insert before

function inserAfter (newEl, existingEl) {
    console.log();
}

inserAfter(li,firstItem)