
document.addEventListener("DOMContentLoaded", () => {
    
    const slide = document.querySelectorAll('.slide');
    const buttonNext = document.querySelector('#next');
    const buttonPrev = document.querySelector('#previous');
    const dot = document.querySelector('.dot-active');
    console.log(dot)

    
    let index = 0

    slide[0].style.opacity = 1;

    buttonNext.addEventListener('click', () => {
        switch(index) {
            case 0:

                gsap.to(slide[0], 0.2, {
                    opacity: 0
                });
                
                gsap.to(slide[1], 0.2, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.2, {
                    x: '24px'
                })

                index = 1;
                break;
            
            case 1: 

                gsap.to(slide[1], 0.2, {
                    opacity: 0
                })
                
                gsap.to(slide[2], 0.2, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.2, {
                    x: '48px'
                })

                index = 2;
                break;

            case 2:

                gsap.to(slide[2], 0.2, {
                    opacity: 0
                })
                
                gsap.to(slide[0], 0.2, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.2, {
                    x: 0
                })

                index = 0;
                break;
        }
    });

    buttonPrev.addEventListener('click', () => {
        switch(index) {
            case 0:

                gsap.to(slide[0], 0.2, {
                    opacity: 0
                })
                
                gsap.to(slide[2], 0.2, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.2, {
                    x: '48px'
                })

                index = 2;
                break;
            
            case 1: 

                gsap.to(slide[1], 0.2, {
                    opacity: 0
                })
                
                gsap.to(slide[0], 0.2, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.2, {
                    x: 0
                })

                index = 0;
                break;

            case 2:

                gsap.to(slide[2], 0.2, {
                    opacity: 0
                })
                
                gsap.to(slide[1], 0.2, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.2, {
                    x: '24px'
                })

                index = 1;
                break;
        }
    });

    

})
