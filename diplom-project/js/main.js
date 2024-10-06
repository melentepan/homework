(function () {

    // Burger

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1000) return

        if (burgerIcon) {
            e.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Modal

    const modalButtons = document.querySelectorAll('.content__modal-link');
    const modals = document.querySelectorAll('.modal');

    modalButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    modals.forEach(modal => {
        modal.addEventListener('click', closeModal);
    });

    function openModal(e) {
        e.preventDefault();

        const modalId = e.currentTarget.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        if (modal) {
            document.body.classList.add('body--opened-modal');
            modal.classList.add('modal--active');
        }
    }

    function closeModal(e) {
        const target = e.target;

        if (!target.classList.contains('modal__email-link')) {
            e.preventDefault();
        }

        if (!target.closest('.modal__cancel') && !target.classList.contains('modal')) return;

        document.body.classList.remove('body--opened-modal');
        document.querySelector('.modal.modal--active').classList.remove('modal--active');
    }

    // Dropdown-menu
    document.addEventListener('DOMContentLoaded', function () {
        if (document.documentElement.clientWidth <= 1000) return

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
        slidesPerView: 1,
        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
        },
        scrollbar: {
            el: '.hero__scrollbar',
            draggable: true,
        },
        breakpoints: {
            851: {
                slidesPerView: 1.5,
            },
            1401: {
                slidesPerView: 1.2,
            },
        }
    });

    // Tooltip
    const tooltip = document.querySelector('.tooltip');
    const items = document.querySelectorAll('.services__bonus-item, .content__examples-laptop, .content__examples-billboard, .content__examples-booklet, .content__examples-roll-up, .content__examples-demo, .content__examples-table, .content__examples-media');

    items.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            if (!item.getAttribute('data-tooltip')) return;
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
    const tabControlsGroups = document.querySelectorAll('.tab-controls');

    tabControlsGroups.forEach(tabControls => {
        tabControls.addEventListener('click', toggleTab);
    });

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link');

        if (!tabControl) return;

        e.preventDefault();

        if (tabControl.classList.contains('tab-controls__link--active')) return;

        const tabGroup = tabControl.closest('.tab-accordion-wrapper');

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = tabGroup.querySelector(tabContentID);

        const activeControl = tabGroup.querySelector('.tab-controls__link--active');
        const activeContent = tabGroup.querySelector('.tab-content--show');

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active');
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show');
        }

        tabControl.classList.add('tab-controls__link--active');
        tabContent.classList.add('tab-content--show');
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

            e.preventDefault();

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

    // Content-block sliders
    const visualSlider = new Swiper('.visual__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.visual__next',
            prevEl: '.visual__prev',
        },
        scrollbar: {
            el: '.visual__scrollbar',
            draggable: true,
        },
    });

    const archSlider = new Swiper('.arch__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.arch__next',
            prevEl: '.arch__prev',
        },
        scrollbar: {
            el: '.arch__scrollbar',
            draggable: true,
        },
    });

    const interiorSlider = new Swiper('.interior__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.interior__next',
            prevEl: '.interior__prev',
        },
        scrollbar: {
            el: '.interior__scrollbar',
            draggable: true,
        },
    });

    const adSlider = new Swiper('.ad__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.ad__next',
            prevEl: '.ad__prev',
        },
        scrollbar: {
            el: '.ad__scrollbar',
            draggable: true,
        },
    });

    const vrSlider = new Swiper('.vr__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.vr__next',
            prevEl: '.vr__prev',
        },
        scrollbar: {
            el: '.vr__scrollbar',
            draggable: true,
        },
    });

    const addSlider = new Swiper('.add__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.add__next',
            prevEl: '.add__prev',
        },
        scrollbar: {
            el: '.add__scrollbar',
            draggable: true,
        },
    });

    document.querySelectorAll('.accordion-list__control').forEach(control => {
        control.addEventListener('click', function (e) {
            e.preventDefault();

            const key = control.getAttribute('data-key');
            const slide = document.querySelector(`.content-block__slide[data-key="${key}"]`);

            if (slide) {
                const index = Array.from(slide.parentNode.children).indexOf(slide);

                if (slide.closest('.visual__slider')) {
                    visualSlider.slideTo(index);
                } else if (slide.closest('.arch__slider')) {
                    archSlider.slideTo(index);
                } else if (slide.closest('.interior__slider')) {
                    interiorSlider.slideTo(index);
                } else if (slide.closest('.ad__slider')) {
                    adSlider.slideTo(index);
                } else if (slide.closest('.vr__slider')) {
                    vrSlider.slideTo(index);
                } else if (slide.closest('.add__slider')) {
                    addSlider.slideTo(index);
                }
            }
        });
    });

    //Chips 
    const projectsChips = document.querySelectorAll('.projects__chips-item');
    const resetButton = document.querySelector('.projects__reset-chips');

    projectsChips.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            el.classList.toggle('projects__chips-item--selected');
        });
    });

    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        projectsChips.forEach(el => {
            el.classList.remove('projects__chips-item--selected');
        });
    });

    const aboutSlider = new Swiper('.about__slider', {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.about__next',
            prevEl: '.about__prev',
        },
        scrollbar: {
            el: '.about__scrollbar',
            draggable: true,
        },
        pagination: {
            el: '.about__pagination',
            type: 'fraction',
        },
        on: {
            slideChange: function () {
                updateCustomScrollbar(this.activeIndex, 'about');
            },
        },
        breakpoints: {
            551: {
                slidesPerView: 2,
            },
            801: {
                slidesPerView: 3,
            },
            1101: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });

    const newsSlider = new Swiper('.news__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.news__next',
            prevEl: '.news__prev',
        },
        scrollbar: {
            el: '.news__scrollbar',
            draggable: true,
        },
        pagination: {
            el: '.news__pagination',
            type: 'fraction',
        },
        on: {
            slideChange: function () {
                updateCustomScrollbar(this.activeIndex, 'news');
            },
        },
        breakpoints: {
            551: {
                slidesPerView: 2,
            },
            901: {
                slidesPerView: 3,
            },
            1201: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });

    function updateCustomScrollbar(activeIndex, sliderType) {
        const rects = document.querySelectorAll(`.custom-scrollbar-rect[data-slider="${sliderType}"]`);
        rects.forEach((rect, index) => {
            if (index === activeIndex) {
                rect.classList.add('custom-scrollbar-rect--active');
            } else {
                rect.classList.remove('custom-scrollbar-rect--active');
            }
        });
    }

    updateCustomScrollbar(aboutSlider.activeIndex, 'about');
    updateCustomScrollbar(newsSlider.activeIndex, 'news');
})();
