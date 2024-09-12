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

    // Tabs

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')



        if (!tabControl) return

        e.preventDefault()

        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }

    // Accordion 

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionOpenedItem != accordionItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });
    });

})()