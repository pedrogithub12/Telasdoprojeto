    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carouselContainer = document.querySelector('.carousel-container');
    
    let currentSlide = 0; // Slide atual (começa no 0)
    const maxSlide = 1;   // Número máximo de movimentos (4 blocos - 3 visíveis = 1)

    nextBtn.addEventListener('click', () => {
        if (currentSlide < maxSlide) {
            currentSlide++;
            carouselContainer.style.transform = `translateX(-${currentSlide * 265}px)`; // 250px largura + 15px margin
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            carouselContainer.style.transform = `translateX(-${currentSlide * 265}px)`;
        }
    });

