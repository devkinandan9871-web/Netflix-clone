const slider = document.querySelector('.tranding-section-slider');
const leftBtn = document.getElementById('slider-left-btn');
const rightBtn = document.getElementById('slider-right-btn');

function updateButtonVisibility() {
    if (!slider || !leftBtn || !rightBtn) return;

    if (slider.scrollLeft <= 10) { 
        leftBtn.style.setProperty('display', 'none', 'important');
    } else {
        leftBtn.style.setProperty('display', 'flex', 'important');
    }

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScroll - 10) {
        rightBtn.style.setProperty('display', 'none', 'important');
    } else {
        rightBtn.style.setProperty('display', 'flex', 'important');
    }
}

rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 400, behavior: 'smooth' }); 
});

leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -400, behavior: 'smooth' });
});

slider.addEventListener('scroll', updateButtonVisibility);

setTimeout(updateButtonVisibility, 100);


// const modal = document.querySelector('.open-temptale');
// const overlay = document.getElementById('modalOverlay');
// const closeBtn = document.querySelector('.template-btn');
// const openTriggers = document.querySelectorAll('#maa-behen-img'); 

// console.log(modal);
// console.log(overlay);
// console.log(closeBtn);
// console.log(openTriggers);

// openTriggers.forEach(trigger => {
//     trigger.addEventListener('click', () => {
//         modal.classList.add('active');
//         overlay.classList.add('active');
//         document.body.style.overflow = 'hidden';
//     });
// });

// closeBtn.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// function closeModal() {
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
//     document.body.style.overflow = 'auto';
// }

const moviesData = {
    "maa-behen-img": {
        titleImg: "maabehen-title.webp",
        bannerImg: "maabehen template.webp",
        year: "2026",
        age: "U/A 13+",
        type: "Movie",
        genres: ["Comedies", "Dramas"],
        desc: "When trouble knocks on her door, a mother and her estranged daughters attempt to cover up a crime in a nosy colony where no secret is safe."
    },
    "the-king-0f-queens-img": {
        titleImg: "king-of-queens-title.webp",
        bannerImg: "The King of Queens.webp",
        year: "2024",
        age: "U/A 16+",
        type: "TV Show",
        genres: ["Sitcom", "Romance"],
        desc: "A delivery man's life changes when his newlywed wife's eccentric father moves into their basement, turning their home upside down."
    },
    "dhurander-img": {
        titleImg: "dhurander-title.webp",
        bannerImg: "dhurander template.webp",
        year: "2025",
        age: "A 18+",
        type: "Movie",
        genres: ["Action", "Thriller"],
        desc: "An elite special forces officer goes rogue to track down a criminal syndicate that threatened his team's last operation."
    },
    "kara-img": {
        titleImg: "kara-title.webp",
        bannerImg: "Kara.webp",
        year: "2026",
        age: "U/A 16+",
        type: "Movie",
        genres: ["Action", "Drama"],
        desc: "A fierce warrior fights against all odds to protect his homeland from an ruthless invading army."
    },
    "the-great-kapil-sharma-show-img": {
        titleImg: "kapil-title.webp",
        bannerImg: "kapil template.webp",
        year: "2026",
        age: "U/A 13+",
        type: "TV Show",
        genres: ["Stand-Up", "Talk Show"],
        desc: "India's favorite comedian Kapil Sharma returns with his quirky crew to host top celebrities and deliver non-stop laughter."
    },
    "dhurander-2-img": {
        titleImg: "dhurander-title.webp",
        bannerImg: "dhurander template.webp",
        year: "2026",
        age: "A 18+",
        type: "Movie",
        genres: ["Action", "Crime"],
        desc: "The stakes get higher as the mission doubles in danger, forcing the team into an explosive showdown."
    },
    "youth-img": {
        titleImg: "youth-title.webp",
        bannerImg: "Youth.webp",
        year: "2025",
        age: "U/A 13+",
        type: "TV Show",
        genres: ["Romantic", "Drama"],
        desc: "A group of college friends navigate love, career choices, and heartbreak as they stand on the edge of adulthood."
    },
    "karatavya-img": {
        titleImg: "karatavya-title.webp",
        bannerImg: "Karatavya.webp",
        year: "2025",
        age: "U/A 16+",
        type: "Movie",
        genres: ["Patriotic", "Drama"],
        desc: "An honest police officer risks his family and his career to bring down a corrupt political empire."
    },
    "berlin-img": {
        titleImg: "berlin-title.webp",
        bannerImg: "berlin template.webp",
        year: "2024",
        age: "A 18+",
        type: "TV Show",
        genres: ["Heist", "Thriller"],
        desc: "During his golden age, Berlin gathers a master crew in Paris for one of his most extraordinary illusions: stealing millions in jewels."
    },
    "clash-in-italy-img": {
        titleImg: "clash-title.webp",
        bannerImg: "Clash in Italy.webp",
        year: "2026",
        age: "U/A 16+",
        type: "Movie",
        genres: ["Adventure", "Action"],
        desc: "What started as a beautiful European vacation turns into a high-octane race for survival through the streets of Rome."
    }
};

const modal = document.querySelector('.open-temptale');
const overlay = document.getElementById('modalOverlay');
const closeBtn = document.querySelector('.template-btn');
const openTriggers = document.querySelectorAll('.tranding-section-slider .card img'); 

openTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const clickedImgId = e.target.id; 
        const movie = moviesData[clickedImgId]; 

        if (movie) {
            modal.querySelector('.template-holder > img').src = movie.bannerImg;
            modal.querySelector('.template-title-holder img').src = movie.titleImg;
            modal.querySelector('.template-contant-main p').textContent = movie.desc;
            
            const headerUl = modal.querySelector('.template-contant-header');
            headerUl.innerHTML = `
                <li class="template-contant-header-name"><span class="template-contant-header-name-contant">${movie.year}</span></li>
                <li class="template-contant-header-name"><span class="template-contant-header-name-contant">${movie.age}</span></li>
                <li class="template-contant-header-name"><span class="template-contant-header-name-contant">${movie.type}</span></li>
                ${movie.genres.map(g => `<li class="template-contant-header-name"><span class="template-contant-header-name-contant">${g}</span></li>`).join('')}
            `;
            
            modal.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}