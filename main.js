$(document).ready(function() {

// pages animations
        var introAbout = anime({
            targets: '#about',
            translateY: '+100em',
            duration: 3000,
            easing: 'easeOutQuart',
            direction: 'reverse',
            autoplay: false
        });

        var introDesigners = anime({
            targets: '#designers',
            translateY: '-100em',
            duration: 3000,
            easing: 'easeOutQuart',
            direction: 'reverse',
            autoplay: false
        });

// cards animations

        var introSetUp = anime({
            targets: '#Set_Up',
            translateX: '-100em',
            duration: 4000,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introConduct = anime({
            targets: '#Conduct',
            translateX: '-100em',
            duration: 3500,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introWeighPersonal = anime({
            targets: '#Weigh_Personal',
            translateX: '-100em',
            duration: 2500,
            easing: 'easeInExpo',
            direction: 'reverse',
        });
        
        var introShowInfo = anime({
            targets: '#Show_Info',
            translateY: '+30em',
            duration: 7000,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introStudyInspiration = anime({
            targets: '#Study_Inspiration',
            translateX: '-100em',
            duration: 7000,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introConsiderAudience = anime({
            targets: '#Consider_Audience',
            translateX: '-100em',
            duration: 3400,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introDoCompetitive = anime({
            targets: '#Do_Competitive',
            translateX: '-100em',
            duration: 5000,
            easing: 'easeInExpo',
            direction: 'reverse',
        });


        var introContemplate = anime({
            targets: '#Contemplate',
            translateX: '-100em',
            duration: 4500,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

// photo animations
        var introAiga = anime({
            targets: '#aiga',
            translateY: '-30em',
            duration: 4500,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introKairos = anime({
            targets: '#kairos',
            translateY: '-30em',
            duration: 5500,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introKatrina = anime({
            targets: '#katrina',
            translateY: '-30em',
            duration: 5000,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introTable = anime({
            targets: '#table',
            translateY: '-30em',
            duration: 4700,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

// halftone animations


        var introHalftone1 = anime({
            targets: '#halftone1',
            translateY: '-90em',
            duration: 5000,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introHalftone2 = anime({
            targets: '#halftone2',
            translateY: '-50em',
            duration: 6000,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introHalftone3 = anime({
            targets: '#halftone3',
            translateY: '-70em',
            duration: 5500,
            easing: 'easeInExpo',
            direction: 'reverse',
        });

        var introHalftone4 = anime({
            targets: '#halftone4',
            translateY: '-100em',
            duration: 5200,
            easing: 'easeInExpo',
            direction: 'reverse',
        });


// button triggers

    $("#about-button").click(function(){
        introAbout.play();
        introAbout.reverse();
    });


    $("#designers-button").click(function(){
        introDesigners.play();
        introDesigners.reverse();
    });


// logo animation

    function assemble() {

        var introA = anime({
            targets: '#logo-a',
            translateX: '-17em',
            translateY: '+10em',
            duration: 2000,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introS = anime({
            targets: '#logo-s',
            translateX: '-=100',
            translateY: '-=200',
            duration: 2200,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introSS = anime({
            targets: '#logo-ss',
            translateX: '-25em',
            translateY: '+5em',
            duration: 2600,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introE = anime({
            targets: '#logo-e',
            translateX: '-40em',
            translateY: '-20em',
            duration: 2800,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introM = anime({
            targets: '#logo-m',
            translateX: '+10em',
            translateY: '+27em',
            duration: 3000,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introB = anime({
            targets: '#logo-b',
            translateX: '-10em',
            translateY: '-30em',
            duration: 3000,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introL = anime({
            targets: '#logo-l',
            translateX: '+30em',
            translateY: '-10em',
            duration: 3000,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introAA = anime({
            targets: '#logo-aa',
            translateX: '+30em',
            translateY: '+10em',
            duration: 3000,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introG = anime({
            targets: '#logo-g',
            translateX: '+20em',
            translateY: '0em',
            duration: 3000,
            direction: 'reverse',
            easing: 'easeInQuart'
        });

        var introE = anime({
            targets: '#logo-ee',
            translateX: '+20em',
            translateY: '-20em',
            duration: 3000,
            direction: 'reverse',
            easing: 'easeInQuart',
        });

    } 
    // end of assemble

    assemble();
    // cards();

});


