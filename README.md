# SBLM

# Home
The home page uses a jquery based slideshow, DOM manipulation, with Bootstrap styling and every page is mobile responsive.

Upon refresh the home page will shuffle an image with a link to the work page where clicked on studio is highlighted.

For example, clicking on the civic link in the home page, will highlight the civic projects in the work page, and so forth.

The photos chosen are in black and white to intice the user to continously click through the page until getting to a final project folder and ultimately see full color images with the according narrative. 

The only color in the page are the studios which guide the user to click on the divs that will direct them further onto the site. 

If the highlighted divs aren't an indicator the nav bar is, which will direct users to the work and contact page.


# Work
The work page contains selected projects by the SBLM curated by the principles. As of right now there are 20 projects with many more to come as proposals get completed. 

The work page is heavy on jquery and DOM manipulation as there is a shuffle function implemented where upon refresh the order of the projects is being changed. 

There is a filter bar where users can filter through each of the five studios and upon doing so the projects associated with the studio will be colorized. 
Hovering over a project will reveal it's title, and clicking on one will lead you to the project page where the user can learn more about the selected proposal and see site photography.

# Projects
The user will see a slideshow which consists of full bleed images. The curated slideshow images will consist of select aspect of the site and reflect a detail of the project.

Users can browse through the images via hovering over a certain section, hovering over the title or the bottom of the image will show an icon and upon click, the user will be scrolled to a site map with a + icon.

Upon clicking the + icon, the projet details will be revealed and the + will be replaced with a - which click on will remove the project details and show the site map.

Below the site map is a detailed flow of the project history, complete with a combination of photos and corresponding narrative.

# Contact
The contact page is simply a list of the offices with corresponding addresses and phone numbers. There is also the option to email SBLM for inquiries and employment opportunities.


# Future edits
### Home Page
For the home page, this is how to add more photos and other edits. 

![Editing the Slideshow](/Readme/indexScreenshot.jpg)

This is the start of the slideshow. 

Lines 53-58 and 60-65, each are two different slides.

Starting at line 53, the start of the div is given the item class for manipulation in the js file.

Line 54 is the image src, the root file. There is an alt tag which is used for SEO purposes. 

Line 55-57 is the caption and the title of the project. In this example it's DSNY Fresh Kills, and Featured project. DSNY is given and id for styling in the css.

Lines 60-65 is pretty much the same except for the extra h2 tag.

![radial](Readme/radial.jpg)

This is the radial button imported from bootstrap. The amount of li items have to be equal to the amount of images. In web developement, the count starts at 0

### Nav Bar
This is the nav bar section, which is pretty straight forward.

![Nav bar](/Readme/navscreenshot.jpg)

It's basically a stylized list. The classes are sblm, and link. With the href linking to the corresponding pages. Clicking on the sblm logo on the home page is basically another way to refresh. The icon class with the burger class will be displayed only when the page is mobile responsive. 

Lines 27-32 are the links for when the page is mobile responsive. They become a different format and arent displayed unless the site is at a certain dimension and or viewed on a device.

We have hardcoded the style because of bootstrap.

### Photo js
The photojs is a bit more complicated, but I'll go through it line by line. I've also commented much of the code to make it easier to breeze through. 

![photo](Readme/photo.jpg)

Line 1 "$(document).ready(function(){" is necessary for any pages using jquery and is a vital tool for front end development. It basically means at the start of the page x,y, and z will prop itself. 

Line 2: Giving all items with the class item a variable

Line 3: The height of the browser will be the height of the image

Line 7/8: The height of the item is the size of the browser, and it's given the class of full-screen

Line 11/12: The number of slides is the amount of classes that have the class item. The current slide is going to be a random slide from $numberofSlides

Lines 16-25: Just the bootstrap version of when you click on the radio button it brings you to the associated slide, as well as adding/removing the class active

### Photo js pt 2
The second part to the photo.js file.

![photo](Readme/photo2.jpg)

Lines 27-36: This is a bootstrap function where it makes the image full screen, and if it can't fit the dimensions, it will add a background color to fill up the space. 

Lines 38-42: When the browser resizes the height of the image changes with the browser.

Lines 44-49: To initiate the carousel, there is no pause between the slides, and each image is displayed for 4000 milliseconds (4 seconds)

### Contact Page
![contact](Readme/contact.jpg)

This page is fairly simple, The locations are wrapped in a dive called office, and each location is given a class of where they are, i.e 'nyc.' The br tags are just breaks for layout purposes.

### Work page pt1
![work](Readme/work.jpg)

The work page is a bit long, alot more Jquery and Javascript. But this first part is the html.

Line 40: This is the start of the projects layout. Wrap, basically wraps around the entire div for the images.

Line 41: We then have the a tag, which links you to the directed project

Line 44: This the image tag, with a class to the associated studio. Not shown here but every image tag will have an alt property which is used for SEO.

Line 46: Is just the text for image selected

Lines 47-50: Just the closing tags

`<a href="[Link to project]">`

	`<div class="box first [studio in three letter format]">`

		`<div class="boxInner">`

			`<img class="[studio in full]" src="[image source]">`

			`<div class="middle">`

				`<div class="text">[Name of project]</a></div>[leave the closing a tag in for styling purposes]`

			`</div>`

		`</div>`

	`</div>`

`</a>`

### Work Page pt2
![work part 2](Readme/work2.jpg)

Line 1, is a familar line, calling jquery again

Lines 5-13: are the filter bar from work html. Each one is given a variable to invoke that function easier

![work part 3](Readme/work3.jpg)

Lines 16-19: are commented code that also explain the function

Lines 21-41: is a function that enables for when clicked on a project to colorize it.

Lines 23-32: effect the filter bar. Clicking on one, makes sure the other studios stay the same

Line 34-38: When The filter button Education is clicked, all the projects with a class of education get added the class 'not gray', which colorized them. And removes any projects that still have the class 'not gray'.

Line 41: We are evoking the function.

This is repeated for all the studio, the filtering, adding removing class and the evoking of the function

### Work Page pt3

![work part3](Readme/work4.jpg)

Earlier on the Work Page, we have given the filter bar studios variables.

Lines 139-145: We push the variables into an array which we can filter next

Lines 147-148: Shuffling the order of clicks

Line 152: Then triggering a click upon refresh, which will always be at random

![work part4](Readme/work5.jpg)

This is the shuffle function, this is quite long, but Will do my best to explain it.

Line 166: any element with the class first

Line 167: an empty array

Line 169: For all the elements with the class first, push the html into the the empty array, elements inner html

Line 173: Empty array

Lines 174-178: Randomize the elements and it'll equal randomIndex. And if anything comes undefined randomize it again, meaning it's an infinity loop

Lines 180-183: Checked indexes if it gets randomized it is true

Line 181: elementsInnerHtmls gets randomizes and it equals elements[i].innerHTML

Line 182: New Array equals the elements[i].innerHTML

Line 183: NewElements = newArray; Which means at the end it gets pushed out

Line 186: The shuffle function is invoked

### Work Page pt4

![work p5](Readme/work6.jpg)

This is quite similar to the filter function we have earlier. It's almost exactly the same except for the middle section. 

Line 195-196: For all the projects that have the class of edu, will be pushed to the top. So clicking on the Education filter all projects that are associated with edu are pushed to the top of the page. The same goes for the rest of the triggers. The reason we don't put this to the top of the page is separation of powers. 

![work p6](Readme/work7.jpg)

Pretty much exactly the same as the click/clicks function earlier. The only difference is the naming convention.

### Project Pages

The project pages come in two different types, one with a more extensive narrative, the other being a slideshow and sitemap.

![project](Readme/projecthtml.jpg)

Lines 33-47 is the slideshow part of the project which is the same for every project. Each image is wrapped around a figure tag. The first slideshow image has the class of show, indicating that this project will be the first image being shown. Every slide will have an id of slideshow so the DOM can make things move around.

The spans on Lines 45 and 46 indicate the previous and next functions that users can click through, to get to the previous or next photo

Line 49 is The transparent title that hovers over the slideshow and gives you a full title of what the project is. 

Line 50, is down, an empty div with the width of the screen, so when clicked it brings you to the first image of the narrative.

### Project Pages pt2

![project](Readme/projecthtml2.jpg)

Lines 52-61 is the start of the narrative with the implementation of the site map. 

Line 53 is the img src that takes the file in the root directory. The image is a gif for file size purposes. And this goes throughout the projects. Each project has a sitemap with the exception of 2. 

Line 54 is the span that basically holds all the important stats/data. The Br tags are there to add line breaks, and create a cohesive structure.

Lines 55-59 are simply the stats and data that will be displayed. When adding more, please assign a  < br > at the end for stylistic purposes

Lines 63 and 64 are just empty divs that will be explained in the js portion. 

Lines 66 and down is the main chunk for the first narrative. The structure is as follows:

`<div class="history1"> [history1 for being the first section]`

  	`<img class= animation-element slide-left > [The image slides in from the left]`

  	`<span>[text would go here]`

  	`</span>`

`</div>`


The process just continues. We also use instyling for sizing and the alt tag for seo purposes

### Project Pages pt3

![project 3](Readme/projectjs.jpg)

This is where it might get a bit confusing. There are a bunch of color, white text, grey text. But I will go over each line. There is also commented out code to get a better understanding of what's going on.

Line 9: This is a counter. For every time the user clicks next the counter goes up by one, and for everytime the user clicks previous the counter goes down by one. 

Line 12: The variable items get all the elements with the class of slideshow or figure

Line 13: The numItems equals the amount of items. For example if the slideshow consists of 4 images, numItems = 4

Line 19: The commented out section pretty much sums it all up, it shows the current slide. 

Line 22: Makes a variable the amount of slides left. So if there are 5 slides, and you've seen 2 of them, itemsToShow = 3

Lines 24-27: It takes all the ITEMS and removes the class show

Line 30: It takes the remainder slides that havent been displayed and gives them the class show

Lines 33-37: Everytime a user clicks next, it shows the next slide and it adds one to the counter

Lines 40-43: Everytime a user clicks previous, it shows the previous slide and it subtracts one from the counter

Line 46: Giving any element witht he class animation-element

Line 47: Declaring window

### Project Pages pt4

![project](Readme/projecthtml3.jpg)

The next lines of code should not be changed or edited in anyway. The next lines are making sure that the image fits to the screen and that it is responsive. So if the window is resized vertically or horizontally, the image will change accordingly.

![project](Readme/projecthtml4.jpg)

The next few lines are a bit easier as apposed to the ones above. The next few lines are the click functions that push you to the next element. Clicking on the site map and it will show you to the the first image of the narrative. 

Line 72: Earlier in the HTML we define down as an empty div, this is calling it as a variable.

Lines 74-78: When the use clicks on the down div, it will scroll to the element with the class of history5 in the matter of .5 seconds. 500 = .5 seconds. To edit the speed increase/decrease the 500. 

Lines 80-85: This one is for the footer, when clicked on the footer, page will bring you right up and to the slideshow. All projects with a narrative have this footer. 

Lines 87-91: This is when clicking on the site map is displays the first element of the narrative. Showing empty which is an empty div. The reason we don't click to display the first element of the narrative is because the nav bar is at a fixed position and will always take about 48px of the image. So clicking to direct to an empty div right about the first story frame allows for the image to be displayed without any obstrusion from the nav bar.
