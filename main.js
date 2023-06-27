function fadeIn(elementId, duration, visibleDuration, fadeOutDuration, delay) {
    setTimeout(function() {
        var element = document.getElementById(elementId);
        element.style.opacity = '0';
        element.style.transition = 'opacity ' + duration + 'ms';
    
        setTimeout(function() {
            element.style.opacity = '1';

            setTimeout(function() {
                element.style.opacity = '0';
            }, visibleDuration);
        }, 1000);
    }, delay);
    
}



function slideInLeft(elementId, duration) {
    var element = document.getElementById(elementId);
    var targetPosition = 30; // Specify the target position
  
    element.style.left = '-100%'; // Set initial position to the left of the container
    element.style.transition = 'left ' + duration + 'ms';
  
    setTimeout(function() {
        element.style.opacity = '1';
        element.style.transform = "scale(1)";
        element.style.left = targetPosition + 'px'; // Slide to the target position
      
        setTimeout(function() {
                element.style.transition = "transform 0.5s";
                element.style.transform = "scale(0.2)";
            
                setTimeout(function() {
                    element.style.opacity = "0";
                }, 400);
        }, 2400);
    }, 1500);
}

function slideInRight(elementId, duration) {
    var element = document.getElementById(elementId);
    var targetPosition = 300; // Specify the target position
  
    element.style.right = '-200%'; // Set initial position to the left of the container
    element.style.transition = 'right ' + duration + 'ms';
  
    setTimeout(function() {
        element.style.right = targetPosition + 'px'; // Slide to the target position

    }, 3500);
};

function fadeInSubHeadline(elementId, duration, visibleDuration, fadeOutDuration, delay) {
    setTimeout(function() {
        var element = document.getElementById(elementId);
        element.style.opacity = '0';
        element.style.transition = 'opacity ' + duration + 'ms';
    
        setTimeout(function() {
            element.style.opacity = '1';

        }, 4900);
    }, delay);
    
};

function fadeInLearnMore(elementId, duration, delay) {
    setTimeout(function() {
        var element = document.getElementById(elementId);
        element.style.opacity = '0';
        element.style.transition = 'opacity ' + duration + 'ms';
    
        setTimeout(function() {
            element.style.opacity = '1';
        }, 5400);
    }, delay);
    
};

function slideInLeftLogo(elementId, duration) {
    var element = document.getElementById(elementId);
    var targetPosition = 290; // Specify the target position
  
    element.style.left = '-100%'; // Set initial position to the left of the container
    element.style.transition = 'left ' + duration + 'ms';
  
    setTimeout(function() {
        element.style.left = targetPosition + 'px'; // Slide to the target position
    }, 5600);
}

function fadeInReplay(elementId, duration, delay) {
    setTimeout(function() {
        var element = document.getElementById(elementId);
        element.style.opacity = '0';
        element.style.transition = 'opacity ' + duration + 'ms';
    
        setTimeout(function() {
            element.style.opacity = '1';
        }, 5800);
    },);
    
};

fadeIn('female', 300, 2000, 1000, 0); // Fade-in, stay visible for 2 seconds, fade-out after 1 second
slideInLeft('headline1', 1000, 1000);
slideInRight('headline2', 1000, 1000);
fadeInSubHeadline('subheadline', 1000, 1000);
fadeInLearnMore('learnmore', 1000);
slideInLeftLogo('logo', 1000,1000);
fadeInReplay('replay', 1000, 1000)


function replayBtn() {
    
    fadeIn('female', 300, 2000, 1000, 0); // Fade-in, stay visible for 2 seconds, fade-out after 1 second
    slideInLeft('headline1', 1000);
    slideInRight('headline2', 1000, 1000);
    fadeInSubHeadline('subheadline', 1000, 1000);
    fadeInLearnMore('learnmore', 100);
    slideInLeftLogo('logo', 1000,);
    fadeInReplay('replay', 100,);
}