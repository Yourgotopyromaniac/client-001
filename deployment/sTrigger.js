gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia(
    {   
        "(min-width: 1023px)": () => 
        {

            let tl1 =  gsap.timeline(
                {
                    scrollTrigger: 
                    {
                        trigger: "#app",
                        start: "+=70px",
                        end: "center bottom",
                        scrub: true,
                        markers : false,
                        pin : true
                    }
                })
            
                tl1.from("#about", {scale: 0.1})    
                tl1.from("#about", {borderRadius: "50%"})
                tl1.from(".fade-in", {autoAlpha: 0})
            
                let tl2 = gsap.timeline(
                    {
                        scrollTrigger: 
                        {
                            trigger: "#intro-cont",
                            start: "+=50px",
                            end: "+=60px",
                            markers: false,
                            scrub: true,
                            pin: false
                        }
                    })
                    tl2.to("#rotator", {autoAlpha: 0})
                    tl2.to("#intro-cont", {autoAlpha: 0})
            
            
            
            let tl3 = gsap.timeline(
                {
                    scrollTrigger:
                    {
                        trigger: "#text-interior",
                        toggleActions: 'play none none none',
                        once: true
                    }
                }
            )
            
            tl3.fromTo("#text-interior", {autoAlpha: 0, x: -200}, {duration: 1.5, autoAlpha: 1, x: 0});
            tl3.fromTo("#image-cont", {autoAlpha: 0, x: 200}, {duration: 1, autoAlpha: 1, x: 0});
            

            let tl4 =  gsap.timeline(
                {
                    scrollTrigger: 
                    {
                        trigger: "#perp-scroll",
                        start: "+=2000px",
                        end: "+=500px",
                        scrub: true,
                        markers : false,
                        pin : false
                        
                    }
                })
                tl4.from("#smartphone", {x: innerWidth * -1})
                tl4.from("#ps-text1", {x: innerWidth * 1})
                tl4.from("#laptop", {x: innerWidth * -1})
                tl4.from("#ps-text2", {x: innerWidth * 1})
                tl4.from("#tablet", {x: innerWidth * -1})
                tl4.from("#ps-text3", {x: innerWidth * 1})

        },

        "(max-width: 1023px)": () => 
        {
            let tl4 =  gsap.timeline(
                {
                    scrollTrigger: 
                    {
                        trigger: "#perp-scroll",
                        start: "+=0px",
                        end: "+=800px",
                        scrub: true,
                        markers : false,
                        pin : false
                        
                    }
                })
                tl4.from("#ps-text1", {x: innerWidth * 1})
                tl4.from("#smartphone", {x: innerWidth * -1})
                tl4.from("#ps-text2", {x: innerWidth * 1})
                tl4.from("#tablet", {x: innerWidth * -1})
                tl4.from("#ps-text3", {x: innerWidth * 1})
                tl4.from("#laptop", {x: innerWidth * -1})
                
        }

    }
)





