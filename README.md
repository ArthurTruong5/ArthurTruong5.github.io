Arthur Truong 
# ArthurTruong5.github.io


### Design Process 

## Portfolio Contents

Before starting out, I included all the items i wanted to be part of my portfolio website. I made a wireframe to show what I planned for my home page.

The listed items I included 

- Home page
- Education history
- Employment history
- Skills as a developer
- About Me
- Future projects
- Contact forms


![random](https://i.imgur.com/tk2LPww.png)
![](https://i.imgur.com/zjZneXI.pnghttps://imgur.com/a/zg5T78H)

## Layout Design

The layout design was challenging as I had limited experience in designing a website by myself. I browsed and looked to other developers portfolios for inspiration and came across freecodecamp top 15 portfolio sites. 


![](https://i.imgur.com/MZTH32K.jpg)

I decided on a layout in my head. I moved onto selecting a theme for my portfolio site. I stumbled across a site - http://mattfarley.ca/


![](https://i.imgur.com/HOgipGe.jpg)

I chose orange, black, blue and white. There were hundreds of websites i stumbled across before I made the decision of my colour scheme. But I wanted something that would stand out.

I went on - https://www.fiverr.com/ to get a logo design. I paid $20 for the overall design process 

![](https://i.imgur.com/ck87kPS.png)

### Images/Multimedia 

For free images, I used https://www.pexels.com/ for providing free images. I used https://www.pexels.com/photo/coding-computer-data-depth-of-field-577585/ for my background.

I used https://fontawesome.com/ and http://konpa.github.io/devicon/ for my icons

![](https://i.imgur.com/zdeFttN.png)

![](https://i.imgur.com/G7MiT7s.png)

###  CSS, JavaScript and Jquery

I used magnific popup to give a zoom in effect for my projects
- http://dimsemenov.com/plugins/magnific-popup/ 

AOS animate was used to acheive the fade and delay effects
- https://github.com/michalsnik/aos


This JavaScript helped acheive the swap quote effect for the home

'''

      $swap.width($($swap.find("li").get(next)).addClass("visible").outerWidth());
      $swap.css({
        "transform": "translateY(-" + next * 3 + "rem)"
      });

      setTimeout(function() {
        loop($swap);
      }, 2000);
    };

    $(function() {
      $("#swap").each(function() {
        var $this = $(this);

        $this.find("li").each(function() {
          $(this).css({
            top: $(this).index() * 3 + "rem"
          });
        });

        loop($this);
      });
    });
'''





This javascript helped with smooth scrolling by identifying the anchor element

'''


      // Speed & Easing
      speed: 2000, // Integer. How fast to complete the scroll in milliseconds
      offset: 95, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
      easing: 'easeInOutCubic', // Easing pattern to use
      customEasing: function(time) {

        // Function. Custom easing pattern
        // If this is set to anything other than null, will override the easing option above

        // return <your formulate with time as a multiplier>

        // Example: easeInOut Quad
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

      },

      // Callback API
      before: function(anchor, toggle) {}, // Callback to run before scroll
      after: function(anchor, toggle) {} // Callback to run after scroll
    });

'''




## Bootstrap 4

https://getbootstrap.com/docs/4.0/components/scrollspy/

Bootstrap 4 was used throughout the website. I used bootstrap grid system, buttons, navigation bar. https://getbootstrap.com/

### Slack Overflow Debugging

I used the code below for debugging purposes

,,,

* {
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
}

,,,
