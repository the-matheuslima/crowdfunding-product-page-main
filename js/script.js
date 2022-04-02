//os primeiros btns da pg
const iconBookmarkBtn = document.querySelector('.icon-bookmark-btn');
const bookmark = document.querySelector('.bookmark');
const imgBbookmark = document.querySelector('.img-bookmark')

iconBookmarkBtn.addEventListener('click', () => {
    iconBookmarkBtn.classList.toggle('bookmark-active')

    if (iconBookmarkBtn.classList.contains('bookmark-active')) {
        console.log(imgBbookmark)
        imgBbookmark.src = 'images/icon-check.svg'
        bookmark.innerHTML = '<strong>Bookmarked</strong>'
    } else {
        imgBbookmark.src = 'images/icon-bookmark.svg'
        bookmark.innerHTML = '<strong>Bookmark</strong>'
    }
})

//modals
const modalThankas = document.querySelector('.modal-thankas')
const backProject = document.querySelector('.back-project')
const modal = document.querySelector('.modal');
const remove = document.querySelector('.close')
const bodyy = document.querySelector('body')
const reward = document.querySelectorAll('.reward')
const gotIt = document.querySelector('.got-it')

function showModal() {
    modal.classList.add('active')
    bodyy.style.position = 'inherit'
}

function removeModal() {
    bodyy.style.position = ''
    modal.classList.remove('active')
    modalThankas.classList.remove('active')
}

//fazer o processo de abrir as subs-caixas quando ela e clicada
const dynamicRadio = document.querySelectorAll('.dynamic-radio')
const modalBox = document.querySelectorAll('.modal-box')
const modalBoxBonationAmount = document.querySelectorAll('.modal-sub-box')
const modalBoxRadio = document.querySelectorAll('.modal-box-radio')
const pledgeInput = document.querySelectorAll('.pledgeInput');


function updateRadioEvents(e) {
    //pegar todos os data-val do modalBoxRadio
    const arrayDataVal = e.target.getAttribute("data-val");

    //pegar todos os data-val do dynamicRadio e comparar com o modalBoxRadio
    //se for igual add um toggle
    dynamicRadio.forEach(e => {
        e.getAttribute("data-val") === arrayDataVal && e.classList.toggle('active')
    }),

        modalBox.forEach(e => {
            e.getAttribute("data-val") === arrayDataVal && e.classList.toggle('active')
        }),

        modalBoxBonationAmount.forEach((e => {
            e.getAttribute('data-val') === arrayDataVal && e.classList.toggle('active')
        }))

    //abrir modal thanks
    reward.forEach(e => {
        e.addEventListener('click', () => {
            modalThankas.classList.add('active')
        })
    })
}

const hamburger = document.querySelector('.nav-mobile');
const navList = document.querySelector('.nav-list')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navList.classList.toggle('active')
})

modalBoxRadio.forEach(e => {
    e.addEventListener('click', updateRadioEvents)
})

gotIt.addEventListener('click', () => {
    modalThankas.classList.remove('active')
    removeModal()
})

remove.addEventListener('click', removeModal)
backProject.addEventListener('click', showModal)