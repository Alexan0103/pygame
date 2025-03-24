document.addEventListener("DOMContentLoaded", () => {
    // Получаем кнопки
    const btnAll = document.querySelector("a[href='#ALL']");
    const btnMath = document.querySelector("a[href='#Maths']");
    const btnInfo = document.querySelector("a[href='#Info']");

    // Получаем все курсы
    const mathCourses = document.querySelectorAll(".course-content-math");
    const infoCourses = document.querySelectorAll(".course-content-info");

    function showCourses(mathVisible, infoVisible) {
        mathCourses.forEach(course => {
            course.closest(".course-card").style.display = mathVisible ? "flex" : "none";
        });
        infoCourses.forEach(course => {
            course.closest(".course-card").style.display = infoVisible ? "flex" : "none";
        });
    }

    // Обработчики событий
    btnMath.addEventListener("click", (e) => {
        e.preventDefault();
        showCourses(true, false);
    });

    btnInfo.addEventListener("click", (e) => {
        e.preventDefault();
        showCourses(false, true);
    });

    btnAll.addEventListener("click", (e) => {
        e.preventDefault();
        showCourses(true, true);
    });
});
