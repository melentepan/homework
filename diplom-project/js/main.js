(function () {


    // Dropdown-menu

    document.addEventListener('DOMContentLoaded', function () {
        const dropdowns = document.querySelectorAll('.dropdown-list')

        dropdowns.forEach(dropdown => {

            const parent = dropdown.closest('.nav__item')

            parent.addEventListener('mouseenter', () => {
                dropdown.style.maxHeight = `${dropdown.scrollHeight}px`
            })

            parent.addEventListener('mouseleave', () => {
                dropdown.style.maxHeight = '0px'
            })
        })
    });


    // Hero-slider

    new Swiper('.hero__slider', {

        spaceBetween: 22,
        slidesPerView: 1.1,


        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
        },

        scrollbar: {
            el: '.hero__scrollbar',
            draggable: 'true',
        },

    });


    // Tooltip

    const tooltip = document.getElementById('tooltip');
    const items = document.querySelectorAll('.services__bonus-item');

    items.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            if (!item.getAttribute('data-tooltip')) return
            tooltip.textContent = item.getAttribute('data-tooltip');
            tooltip.style.display = 'block';
        });

        item.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.pageX}px`;
            tooltip.style.top = `${e.pageY}px`;
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });

})()