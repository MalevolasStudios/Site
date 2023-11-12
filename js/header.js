window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.MenuPrincipal')
        scroll.classList.toggle('active', window.scrollY > 200)
})