// menu function

const getBtn = document.querySelector('.mob-btn');
// console.log(getBtn);
getBtn.addEventListener('click', e => {
    document.querySelector('body').classList.toggle('show-menu');
})


const getDropDown = document.getElementsByClassName('main-nav');
for ( div of getDropDown){
    var selectLi = div.getElementsByTagName('li');
    for ( li of selectLi){
       if (li.contains(li.querySelector('ul'))) {
        li.classList.add('submenu');
        li.innerHTML += "<i></i>";
        }
    }
}

const getDropDownClick = document.querySelectorAll('.main-nav i');
getDropDownClick.forEach((item) => {
    item.addEventListener('click', e => {
        e.target.parentNode.classList.toggle('open');
    })
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 16,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 2.4,
            spaceBetween: 10,
            navigation: {
                enabled: false
            },
            pagination: {
                enabled: true
            }
        },
        480: {
            slidesPerView: 3.2,
            spaceBetween: 12,
            navigation: {
                enabled: false
            },
            pagination: {
                enabled: true
            }
        },
        768: {
            slidesPerView: 4.2,
            spaceBetween: 14,
            navigation: {
                enabled: false
            },
            pagination: {
                enabled: true
            }
        },
        992: {
            slidesPerView: 5.2,
            spaceBetween: 16,
            navigation: {
                enabled: true
            },
            pagination: {
                enabled: false
            }
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 16,
            navigation: {
                enabled: true
            },
            pagination: {
                enabled: false
            }
        }
    }
  
  });

// Blog Swiper
const blogSwiper = new Swiper('.blog-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.blog-nav-next',
        prevEl: '.blog-nav-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 20,
            navigation: {
                enabled: false
            },
            pagination: {
                enabled: true
            }
        },
        768: {
            slidesPerView: 1.2,
            spaceBetween: 25,
            navigation: {
                enabled: false
            },
            pagination: {
                enabled: true
            }
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 25,
            navigation: {
                enabled: true
            },
            pagination: {
                enabled: true
            }
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                enabled: true
            },
            pagination: {
                enabled: true
            }
        }
    }
});

// Footer accordion functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.footer-section .section-title');
    
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const links = this.nextElementSibling;
            const isActive = links.classList.contains('active');
            
            // Close all other sections
            document.querySelectorAll('.footer-links').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelectorAll('.section-title').forEach(title => {
                title.classList.remove('active');
            });
            
            // Toggle current section
            if (!isActive) {
                links.classList.add('active');
                this.classList.add('active');
            }
        });
    });
});