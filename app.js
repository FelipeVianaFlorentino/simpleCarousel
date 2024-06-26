
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

                gsap.to(slide[0], 0.5, {
                    opacity: 0
                });
                
                gsap.to(slide[1], 0.5, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.5, {
                    x: '24px',
                    ease: "Power1.easeInOut"
                })

                index = 1;
                break;
            
            case 1: 

                gsap.to(slide[1], 0.5, {
                    opacity: 0
                })
                
                gsap.to(slide[2], 0.5, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.5, {
                    x: '48px',
                    ease: "Power1.easeInOut"
                })

                index = 2;
                break;

            case 2:

                gsap.to(slide[2], 0.5, {
                    opacity: 0
                })
                
                gsap.to(slide[0], 0.5, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.5, {
                    x: 0,
                    ease: "Power1.easeInOut"
                })

                index = 0;
                break;
        }
    });

    buttonPrev.addEventListener('click', () => {
        switch(index) {
            case 0:

                gsap.to(slide[0], 0.5, {
                    opacity: 0
                })
                
                gsap.to(slide[2], 0.5, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.5, {
                    x: '48px',
                    ease: "Power1.easeInOut"
                })

                index = 2;
                break;
            
            case 1: 

                gsap.to(slide[1], 0.5, {
                    opacity: 0
                })
                
                gsap.to(slide[0], 0.5, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.5, {
                    x: 0,
                    ease: "Power1.easeInOut"
                })

                index = 0;
                break;

            case 2:

                gsap.to(slide[2], 0.5, {
                    opacity: 0
                })
                
                gsap.to(slide[1], 0.5, {
                    opacity: 1, 
                })

                gsap.to(dot, 0.5, {
                    x: '24px',
                    ease: "Power1.easeInOut"
                })

                index = 1;
                break;
        }
    });

    

})
