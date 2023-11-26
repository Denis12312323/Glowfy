
new Swiper(".hero__slider", {
    // modules: [Navigation],
    // observer: true,
    // observeParents: true,
    // slidesPerView: 1,
    // spaceBetween: 0,
    // speed: 800,
    // // navigation: {
    // //     prewEl: '.hero__arrow--left',
    // //     nextEl: '.hero__arrow--right',
    // // },
})


document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('active');
    }
}

