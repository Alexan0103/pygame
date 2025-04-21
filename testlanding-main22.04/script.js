document.addEventListener("DOMContentLoaded", () => {
    const btnAll = document.querySelector("a[href='#ALL']");
    const btnMath = document.querySelector("a[href='#Maths']");
    const btnInfo = document.querySelector("a[href='#Info']");
    const btnPhys = document.querySelector("a[href='#Phys']");
    const btnProg = document.querySelector("a[href='#Prog']");
    const btnOge = document.querySelector("a[href='#Oge']");
    const btnHighMath = document.querySelector("a[href='#HighMath']");
    const courseCards = document.querySelectorAll(".course-card");

    // Кнопка "Показать ещё"
    const showMoreBtn = document.createElement("button");
    showMoreBtn.textContent = "Показать ещё";
    showMoreBtn.classList.add("show-more-btn");
    showMoreBtn.style.margin = "20px auto";
    showMoreBtn.style.display = "block";

    function hideShowMoreButton() {
        if (showMoreBtn.parentNode) {
            showMoreBtn.parentNode.removeChild(showMoreBtn);
        }
    }

    function showCoursesByRange(ranges) {
        hideShowMoreButton();
        courseCards.forEach((card, index) => {
            let show = false;
            ranges.forEach(range => {
                if (index >= range[0] - 1 && index <= range[1] - 1) {
                    show = true;
                }
            });
    
            if (show) {
                card.style.display = "flex";
                card.classList.remove("fade-in"); // сброс, если уже была
                void card.offsetWidth; // перезапуск
                card.classList.add("fade-in");
            } else {
                card.style.display = "none";
            }
        });
    }
    
    
    

    function showInitialCourses() {
        courseCards.forEach((card, index) => {
            if (index < 5) {
                card.style.display = "flex";
                card.classList.remove("fade-in"); // сброс
                void card.offsetWidth; // перезапуск анимации
                card.classList.add("fade-in");
            } else {
                card.style.display = "none";
            }
        });
    
        if (!document.body.contains(showMoreBtn)) {
            courseCards[courseCards.length - 1].parentNode.appendChild(showMoreBtn);
        }
    }
    
    
    
    showMoreBtn.addEventListener("click", () => {
        courseCards.forEach((card, index) => {
            if (card.style.display === "none") {
                card.style.display = "flex";
                card.classList.add("fade-in");
                setTimeout(() => card.classList.remove("fade-in"), 500);
            }
        });
        hideShowMoreButton();
    });
    

    // Кнопка "Все курсы"
    btnAll.addEventListener("click", (e) => {
        e.preventDefault();
        showInitialCourses();
    });

    // Остальные фильтры
    btnMath.addEventListener("click", (e) => {
        e.preventDefault();
        showCoursesByRange([[9, 17]]);
    });

    btnInfo.addEventListener("click", (e) => {
        e.preventDefault();
        showCoursesByRange([[1, 8]]);
    });

    btnPhys.addEventListener("click", (e) => {
        e.preventDefault();
        showCoursesByRange([[18, 21]]);
    });

    btnProg.addEventListener("click", (e) => {
        e.preventDefault();
        showCoursesByRange([[22, 25]]);
    });

    btnHighMath.addEventListener("click", (e) => {
        e.preventDefault();
        showCoursesByRange([[26, 26]]);
    });

    btnOge.addEventListener("click", (e) => {
        e.preventDefault();
        showCoursesByRange([[27, 32]]);
    });

    //  Автозапуск при загрузке
    showInitialCourses();

    // Появление подсказки
    setTimeout(() => {
        document.querySelector(".floating-box").classList.add("visible");
    }, 1000);
});


function animateCards(cards) {
    cards.forEach((card, index) => {
        card.style.display = "flex";
        card.classList.remove("fade-in"); // сбрасываем, если анимация уже была
        void card.offsetWidth; // перезапуск анимации
        card.style.animationDelay = `${index * 100}ms`;
        card.classList.add("fade-in");
    });
}


document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const active = button.classList.contains('active');
        document.querySelectorAll('.faq-question').forEach(btn => {
            btn.classList.remove('active');
            btn.nextElementSibling.style.maxHeight = null;
        });

        if (!active) {
            button.classList.add('active');
            const answer = button.nextElementSibling;
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

