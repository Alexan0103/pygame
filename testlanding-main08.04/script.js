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
        courseCards.forEach((card, index) => {
            let show = false;
            ranges.forEach(range => {
                if (index >= range[0] - 1 && index <= range[1] - 1) {
                    show = true;
                }
            });
            card.style.display = show ? "flex" : "none";
        });
        hideShowMoreButton();
    }

    // Показывает только первые 5 курсов и кнопку
    function showInitialCourses() {
        courseCards.forEach((card, index) => {
            card.style.display = index < 5 ? "flex" : "none";
        });
        if (!document.body.contains(showMoreBtn)) {
            courseCards[courseCards.length - 1].parentNode.appendChild(showMoreBtn);
        }
    }

    // Обработчик для "Показать ещё"
    showMoreBtn.addEventListener("click", () => {
        courseCards.forEach(card => card.style.display = "flex");
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
