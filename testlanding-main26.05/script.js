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
        showCoursesByRange([[26, 33]]);
    });

    btnOge.addEventListener("click", (e) => {
        e.preventDefault();
        showCoursesByRange([[34, 39]]);
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


document.addEventListener("DOMContentLoaded", function () {
    const span = document.getElementById("exam-type");
    const options = ["ЕГЭ", "ОГЭ"];
    let index = 0;

    function typeText(text, callback) {
        span.textContent = "";
        let i = 0;
        const interval = setInterval(() => {
            span.textContent += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                if (callback) setTimeout(callback, 2000); // пауза после появления
            }
        }, 100);
    }

    function loop() {
        typeText(options[index], () => {
            index = (index + 1) % options.length;
            loop();
        });
    }

    loop();
});


  document.getElementById('burger-toggle').addEventListener('click', function () {
    document.getElementById('main-nav').classList.toggle('open');
  });

  // Появление header при прокрутке
  let lastScroll = 0;
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 200 && currentScroll < lastScroll) {
      header.classList.remove('hidden');
      header.classList.add('visible');
    } else if (currentScroll > 200) {
      header.classList.remove('visible');
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden', 'visible');
    }

    lastScroll = currentScroll;
  });

  document.addEventListener("DOMContentLoaded", function () {
    // === КНОПКА "НАВЕРХ" ===
    const backToTopBtn = document.getElementById("back-to-top");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
      
    });
  
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
    // Автоматическое скрытие бургер-меню при скролле (на мобильных)
window.addEventListener("scroll", () => {
  const nav = document.getElementById("main-nav");
  const burger = document.getElementById("burger-toggle");
  if (window.innerWidth <= 768 && nav.classList.contains("open")) {
    nav.classList.remove("open");
    // Если нужно, можно также поменять иконку бургера, если она меняется динамически
  }
});

    // === ПОИСК ПО КУРСАМ ===
    const input = document.getElementById("courseSearchInput");
    const courseCards = document.querySelectorAll(".course-card");
  
    if (input) {
      input.addEventListener("input", function () {
        const query = this.value.toLowerCase();
  
        courseCards.forEach(card => {
          const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
          const desc = card.querySelector("p")?.textContent.toLowerCase() || "";
  
          if (title.includes(query) || desc.includes(query)) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    }
  
    // === ПЛАВНЫЙ СКРОЛЛ ПО МЕНЮ ===
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll('a[data-target]');
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.dataset.target;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  window.addEventListener("scroll", function () {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById("scrollProgress").style.width = scrolled + "%";
  });

function updateDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  document.getElementById("footer-year").textContent = year;
  document.getElementById("footer-time").textContent = "Текущее время: " + time;
}

// Обновляем сразу и потом каждую секунду
updateDateTime();
setInterval(updateDateTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("question-form");
  const success = document.getElementById("q-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Можно добавить валидацию/отправку позже
    success.style.display = "block";
    form.reset();
    setTimeout(() => {
      success.style.display = "none";
    }, 5000);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("question-form");
  const success = document.getElementById("q-success");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.elements["name"].value;
    const contact = form.elements["contact"].value;
    const message = form.elements["message"].value;

    const botToken = "7509427482:AAETbHWGm2eBdKr31vBpuIA6SemoLVsffLM";
    const chatId = "-1002604961665"; // <- подтвержденный chat_id

    const text = `
<b>📩 Новая заявка с сайта</b>%0A
<b>👤 Имя:</b> ${name}%0A
<b>📱 Контакт:</b> ${contact}%0A
<b>📝 Вопрос:</b> ${message}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          success.style.display = "block";
          form.reset();
          setTimeout(() => success.style.display = "none", 5000);
        } else {
          alert("❌ Ошибка Telegram API. Проверь токен или chat_id.");
        }
      })
      .catch(error => {
        console.error("Telegram Error:", error);
        alert("❌ Ошибка соединения. Проверьте интернет.");
      });
  });
});








  


  



        
