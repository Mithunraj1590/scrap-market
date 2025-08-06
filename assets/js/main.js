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

// Testimonial Swiper
const testimonialSwiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.testimonial-nav-next',
        prevEl: '.testimonial-nav-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                enabled: false
            },
            pagination: {
                enabled: true
            }
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 25,
            navigation: {
                enabled: false
            },
            pagination: {
                enabled: true
            }
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                enabled: true
            },
            pagination: {
                enabled: true
            }
        },
        1200: {
            slidesPerView: 2,
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

// Buy Page Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Radio button functionality
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            // Remove active class from all radio marks in the same group
            const name = this.name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(rb => {
                rb.closest('.filter-option').classList.remove('active');
            });
            
            // Add active class to selected radio
            this.closest('.filter-option').classList.add('active');
            
            // Log the selected value
            console.log(`Selected ${name}:`, this.value);
        });
    });

    // Tag button functionality
    const tagButtons = document.querySelectorAll('.tag-btn');
    tagButtons.forEach(tag => {
        tag.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');
            
            // Log the selected tags
            const activeTags = document.querySelectorAll('.tag-btn.active');
            const selectedTags = Array.from(activeTags).map(tag => tag.dataset.tag);
            console.log('Selected tags:', selectedTags);
        });
    });

    // Auto-apply filters when selections change
    function applyFilters() {
        // Collect all filter values
        const selectedCategory = document.querySelector('input[name="category"]:checked');
        const selectedBrand = document.querySelector('input[name="brand"]:checked');
        const selectedTags = document.querySelectorAll('.tag-btn.active');

        const filters = {
            category: selectedCategory ? selectedCategory.value : null,
            brand: selectedBrand ? selectedBrand.value : null,
            tags: Array.from(selectedTags).map(tag => tag.dataset.tag)
        };

        console.log('Applied Filters:', filters);
        
        // Here you would typically make an API call or update the listing
        // For now, we'll just log the filters
    }

    // Apply filters when radio buttons change
    radioButtons.forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });

    // Apply filters when tag buttons are clicked
    tagButtons.forEach(tag => {
        tag.addEventListener('click', applyFilters);
    });

    // Mobile Filter Popup Functionality
    const mobileFilterBtn = document.getElementById('floatingFilterBtn');
    const mobileFilterPopup = document.getElementById('mobileFilterPopup');
    const closeFilterBtn = document.getElementById('closeFilterBtn');
    const clearMobileFiltersBtn = document.getElementById('clearMobileFilters');
    const applyMobileFiltersBtn = document.getElementById('applyMobileFilters');

    // Function to disable body scroll
    function disableBodyScroll() {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${window.scrollY}px`;
    }

    // Function to enable body scroll
    function enableBodyScroll() {
        const scrollY = document.body.style.top;
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Open mobile filter popup
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', function() {
            mobileFilterPopup.classList.add('active');
            disableBodyScroll();
        });
    }

    // Close mobile filter popup
    if (closeFilterBtn) {
        closeFilterBtn.addEventListener('click', function() {
            mobileFilterPopup.classList.remove('active');
            enableBodyScroll();
        });
    }

    // Close popup when clicking overlay
    const filterPopupOverlay = document.querySelector('.filter-popup-overlay');
    if (filterPopupOverlay) {
        filterPopupOverlay.addEventListener('click', function() {
            mobileFilterPopup.classList.remove('active');
            enableBodyScroll();
        });
    }

    // Clear mobile filters
    if (clearMobileFiltersBtn) {
        clearMobileFiltersBtn.addEventListener('click', function() {
            // Uncheck all radio buttons in mobile popup
            const mobileRadioButtons = mobileFilterPopup.querySelectorAll('input[type="radio"]');
            mobileRadioButtons.forEach(radio => {
                radio.checked = false;
            });

            // Remove active class from tag buttons in mobile popup
            const mobileTagButtons = mobileFilterPopup.querySelectorAll('.tag-btn');
            mobileTagButtons.forEach(tag => {
                tag.classList.remove('active');
            });
        });
    }

    // Apply mobile filters
    if (applyMobileFiltersBtn) {
        applyMobileFiltersBtn.addEventListener('click', function() {
            // Collect mobile filter values
            const selectedMobileCategory = mobileFilterPopup.querySelector('input[name="mobile-category"]:checked');
            const selectedMobileBrand = mobileFilterPopup.querySelector('input[name="mobile-brand"]:checked');
            const selectedMobileTags = mobileFilterPopup.querySelectorAll('.tag-btn.active');

            const mobileFilters = {
                category: selectedMobileCategory ? selectedMobileCategory.value : null,
                brand: selectedMobileBrand ? selectedMobileBrand.value : null,
                tags: Array.from(selectedMobileTags).map(tag => tag.dataset.tag)
            };

            console.log('Applied Mobile Filters:', mobileFilters);
            
            // Close popup
            mobileFilterPopup.classList.remove('active');
            enableBodyScroll();
            
            // Here you would typically make an API call or update the listing
        });
    }

    // Mobile filter tag button functionality
    const mobileTagButtons = mobileFilterPopup.querySelectorAll('.tag-btn');
    mobileTagButtons.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

// Product Detail Page Tab Functionality - Removed as Bootstrap handles this automatically