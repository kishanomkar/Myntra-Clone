        // Add any interactive features here
        document.querySelector('.search-container input').addEventListener('focus', function() {
            this.style.background = '#ffffff';
        });

        document.querySelector('.search-container input').addEventListener('blur', function() {
            this.style.background = '#f5f5f6';
        });




        const scroll= new LocomotiveScroll({
            el: document.querySelectorAll,
            smooth: true
        });






        // let index = 0;
        // function showSlide() {
        //     document.getElementById('carousel').style.transform = `translateX(${-index * 100}%)`;
        // }
        // function nextSlide() {
        //     index = (index < 3) ? index + 1 : 0;
        //     showSlide();
        // }
        // setInterval(nextSlide, 2000);
               
