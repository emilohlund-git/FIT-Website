# Milestone Project #1 - Personal Trainer website
[This project on github pages](https://emilohlund-git.github.io/FIT-Website/)

## UX
I've created this website primarily for people who have an interest in physical training, and how to get in touch with someone who can help them achieve their goals within that interest. Also for people who are already in touch with a personal trainer and would just like to browse here for foodtips, or tips / guides for certain physical activities. 

Also it's a way for a customer to administrate booked sessions and a way of communication to the personal trainer if none other is available.

### Wireframe mockups
(using [Balsamiq Wireframes](https://balsamiq.com/wireframes/))
![alt text](https://res.cloudinary.com/dgh5iyqga/image/upload/v1569525010/FIT/Desktop_ulg61o.png "Desktop Wireframes")
![alt text](https://res.cloudinary.com/dgh5iyqga/image/upload/v1569525010/FIT/Mobile_lpu8b9.png "Mobile Wireframes")

## Features
#### Home
Also leads back to the start page. This page contains a [carousel](https://getbootstrap.com/docs/4.1/components/carousel/), and a couple of [cards](https://getbootstrap.com/docs/4.1/components/card/), which are both components from the Bootstrap library. 
#### About
A section that displays the thoughts of people who have used the services which the owner of the website provides. Aswell as telling the story of the owner, why this website exists and what it is about. There's also a place for a video, which is intended for a 'Welcome to my website, this is me' kind of informational video. At the end of the page you have the option to press a button to get linked to the contact page.
#### Contact
Contains a [contact form](https://getbootstrap.com/docs/4.1/components/forms/) and information on how to get in touch with the owner of the website.
#### Profile Icon
You can press this button to access a log in form, the idea of being able to log in is so that you can get in touch with your booked sessions with the personal trainer, as well as write and read messages sent from the personal trainer. 
#### Members Page
This is where you can administrate your booked sessions and write / read messages. As well as keep track on how many sessions you've used and what kind of reward you get every tenth session which is displayed using a progress bar.
#### Login Page
There is a login page which you get redirected to if you press the 'Read more!' button underneath the recipes on the start page. This is intended for locked content, since most recipes and such would be restricted for non-members.

### Existing Features
* #### Navigation bar
Turns into a hamburger menu on mobile devices. The hamburger icon is animated using CSS & jQuerys toggle function. On desktop the buttons in the menu are animated strictly using CSS.
* #### Carousel
Using a carousel to be able to tell on first sight what this website is going to be about.
* #### Modal
Pressing the subscribe button toggles a modal, where you can enter your e-mail address and eventually be able to subscribe to a newsletter created by the personal trainer. If you press submit the content of the modal changes to a thank you message, which then resets when you exit the modal. This functionality I've created using JavaScript.
* #### Tooltips
From the bootstrap components library, if you hover over the 'Why subscribe?' text which is right under the Subscribe button it displays a short informative text on the perks of subscribing to the newsletter.
* #### Cards you can hover over
Made using CSS, changing the display class from none to block on the p & small elements contained by the card when hovering over it.
* #### iFrame
The iFrame is on the About page to display a YouTube video, whenever you press the Play symbol. I'm using JavaScript & CSS to toggle the opening and closing sequences when pressing the button. Which is created by changing the height property of the iFrame column.
* #### Contact Form
Customized with CSS & added some Font Awesome icons for a better visual experience.
* #### Hamburger Menu
Three divs with a black background to represent the three lines, each div is animated using CSS ([transform](https://www.w3schools.com/cssref/css3_pr_transform.asp)). And toggled using jQuerys [.toggle](https://api.jquery.com/toggle/) function. 
* #### Overlay
The menu overlay on the mobile version of the website is created using CSS ([clip-path: circle](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)).

### Features yet to be implemented
* #### Actual logging in
I've yet to figure out how to handle the log in proccess and authorisation, I know how to do it using Firebase but I'm not quite sure I want to take that route.
* #### Messaging
There will be a feature so that you can both recieve and write messages to the personal trainer.
* #### Schedule handling
I will implement a schedule, so that you can both book & cancel appointments with the personal trainer.
* #### Recipes
A page which displays recipes written by, or chosen by the personal trainer.
* #### Exercises
A page where you can find exercises, videos and images guiding you how to do them.
* #### Tips
A page with tips on your training and how to be effective with it.

## Technologies Used
1. [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
Using Bootstrap for it's flexibility with responsive websites, and great component library.
2. [jQuery](https://jquery.com/)
For it's functionality with Bootstrap elements and it's easy ability of targeting and animating elements in HTML using Javascript.
3. [Font Awesome](https://fontawesome.com/)
The project includes Font Awesome for, well, icons.
4. [Sass](https://sass-lang.com/)
I think it's awesome to work more in an object oriented fashion with CSS.

## Testing
I've run my code through https://jigsaw.w3.org/css-validator/ and https://validator.w3.org/ to make sure it's structurally correct.
Been testing it continuously with the DevTools in Google Chrome to make sure the website is mobile responsive, as well as opened the website on my actual phone. 

The website seems to run as expected on the devices I have been testing it with, the only problem I've come accross is using large widescreen monitors. The Bootstrap carousel doesn't quite scale that well, which is a problem that I'm trying to address.

## Deployment
I've continously throughout the project been commiting my progress to Git using the following steps in the Git Bash terminal:
* First of all using the cd command to direct me to the appropriate repository.
* Secondly using git add ./ to add the entire repository to Git.
* Thirdly commited my work using the git commit -m "message" command.
* Finally established a remote connection to GitHub using git remote add and then pushed the commited work to GitHub using git push

To be able to display this project to the world I've published the website using GitHub pages.

## Credits

### Content
[Codepen](https://codepen.io/peruvianidol/pen/NLMvqO) for the progressbar in the [members page](https://emilohlund-git.github.io/FIT-Website/member.html?)
[Youtube API](https://imelgrat.me/javascript/youtube-iframe-api-javascript/) for controlling the embedded YouTube video

### Media
The photos used in this site were obtained from [Pexels](https://www.pexels.com) and uploaded to [Cloudinary](https://cloudinary.com/) so I don't have to include them in my repository.
