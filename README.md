

<h1 align="center">
    <a href=""><img src="/assets/images/rpoasbadge.png" style="center" alt="RPOAS Logo"></a>
</h1>

<div align="center">

# Retired Police Officers Association Lanarkshire

[Open in GitHub](https://github.com/H4RP3RK/milestone_2_rpoas)

</div>

A recruitment website for the Lanarkshire branch of the Retired Police Officers Association of Scotland. 
The primary goal is to encourage retired police officers to join and engage with the RPOAS. 
It is also to keep current members informed about branch news and events, and to continue to build on the collection 
of historical photos. 

The website features member testimonials, details of past and upcoming events, a gallery of historical photos related
to the police force in Lanarkshire, details of member benefits, a sign up form and a contact page.

The client requested this website to address a number of issues with current methods of recruitment and communication. 
* [RPOAS Lanarkshire Facebook page](https://www.facebook.com/rpoas.lanarkshire), which is only accessible to those with a Facebook account. 
* Mass emails, which the RPOAS Lanarkshire branch sends using [MailChimp](https://mailchimp.com/). The mailing list consists of RPOAS Lanarkshire members and potential members who have provided their contact details at recruitment events.
* A central [RPOAS website](https://www.rpoas.org.uk/wp/), with separate pages for each branch. This site is maintained centrally and rarely updated. Most information is only available with login details.

The business goals of this website are to:
* Build awareness of the RPOAS amongst retired police officers.
* Promote the benefits of RPOAS membership.
* Encourage engagement in the RPOAS community.
* Rekindle a sense of pride and belonging in the police community.

The user goals of this website are:
* To find out more about what the RPOAS is and what it offers to members.
* An intuitive sign up process.
* Easy access to the rest of the RPOAS community.
* A simple way to search through historical photos.

---

## User Experience

### Target Audience

The target audience for RPOAS Lanarkshire are:
* Retired police officers.
* Likely to have spent at least some of their career in Lanarkshire (but not a requirement for membership).
* Likely to live in Scotland (but not a requirement for membership).
* Aged between 50 to 90 years old.
* Not necessarily very experienced with navigating the internet.

A secondary audience are family and friends of retired police officers, particularly those who have passed away.
The RPOAS provides a way for family/friends to stay connected with the police community and reminisce about their 
loved ones.

### User Journey

There are several possible user journeys to the website:
* Recently attended a retirement seminar, where RPOAS Lanarkshire has given a presentation.
* Recently retired and been emailed/posted information about RPOAS Lanarkshire.
* Visited the RPOAS Lanarkshire Facebook page.
* Been referred by a current RPOAS member.
* Used a search engine.
* Current RPOAS members who have been informed about the website by email or Facebook.

### User Aim

Users visit this website because they want:
* To find out about what the RPOAS can offer members.
* A quick and easy way to register as an RPOAS member.
* A way to reminisce about their career and find out more about the history of Lanarkshire Police Force.
* To discover what events are upcoming in their area.
* To contact the RPOAS branch with a question or suggestion.
* To contribute to the collection of historical photos.

This website helps them achieve these goals by providing:
* A reliable and regularly updated source of information that is not reliant on login or contact details.
* A straight forward registration form that automatically adds user details to the RPOAS Lanarkshire mailing list.
* An informative gallery of historical photos that can be filtered by location and/or year.
* An interactive map that links to details of upcoming events.
* An easy way to get in touch with the RPOAS Lanarkshire Branch Committee with any questions or suggestions.

### User Stories

1. As a new visitor to the website, I want to find out what RPOAS Lanarkshire is.
2. As a new visitor to the website, I want an easy way to contact RPOAS Lanarkshire with my questions.
3. As a potential member, I want to find out what the RPOAS has to offer members.
4. As a potential member, I want an efficient way to register with the RPOAS.
5. As a current RPOAS member, I want to find out about events are happening in my area.
6. As a current RPOAS member, I enjoy looking through old photos from my time at each police station.
7. As a current RPOAS member, I like to contribute information on the photos.
8. As a family member of a retired Lanarkshire police officer, I want to reminisce about their time in the police force.

### Wireframes

* [About](wireframes/milestone2_about.png)
* [Sign Up](wireframes/milestone2_signup.png)
* [Gallery](wireframes/milestone2_gallery.png)
* [Events](wireframes/milestone2_events.png)
* [Contact](wireframes/milestone2_contact.png)

---
## Features

Every page has a consistent layout and design, which features:
* Headers and footers coloured blue and off-white, in line with the Police Scotland brand. The gold accents are in keeping with the RPOAS logo.
* The RPOAS logo takes pride of place in the centre of the header, drawing the visitor's attention.
* The responsive navigation bar is also placed centre, directly underneath the logo. The active navigation link is highlighted in gold. On mobile screens, the navigation bar is reduced to a burger in order to utilise screen space.
* The footer features links to related sites - the RPOAS central website, the RPOAS Lanarkshire Facebook page, an internal link to the contact page and the Lanarkshire Police Historical Society.
* A banner provides a clear call to action for visitors to join the RPOAS. It provides a link to the signup page, which is highlighted with the banner's gold colour and finger point symbols.
* Consistent and simple styling of the gold rounded-border boxes breaks each web page's information into easily digestible chunks. 
* A responsive grid design ensures that the content is organised in an aesthetically pleasing and practical format on all screen sizes.
* All texts-sizes are in relative vh/vw units to ensure that the font is easily readable and well placed on all screen sizes.

#### About 
Welcomes the visitor with a photo of the RPOAS Lanarkshire Committee. The [thin blue line](https://en.wikipedia.org/wiki/Thin_blue_line) across the photograph invokes the police force symbolism. An explanation is provided as to the target audience and what the RPOAS provides. Links are provided to each of the features of the website and also to the RPOAS 
Lanarkshire Facebook page. These links are highlighted with the finger point symbols. 

The responsive grid design shows one column in smaller screens and two columns in larger screens.

#### Signup 
Provides a simple form, broken down into three clear sections. Required sections are denoted with an asterix. The banner reiterates the reasons for signing up, which have previously been explained to the user on the about page.
The large submit button draws the user's attention. On pressing submission, a clear explanation is given on whether the submission was successful or required sections are missing. If successful, the user is informed that an email with further details will be sent to them shortly.
The thumbs up symbol continues the imagery used in the banner and elsewhere on the website.

The responsive grid design increases the size of the form as the screen size increases. Some input sections are moved onto the one line on larger screens.

#### Gallery 
A simple search form is presented at the top of the screen. Each search input provides clear and concise instructions on the way in which the photos can be searched. The search form invites the user to click on each picture for more information and the hover styling on each photo highlights that they can be clicked. 
On clicking each photo, a large modal appears with a larger full dimension version of the photo, a heading that includes the year the photo was taken, a paragraph explaining the history of the photo and a footer that invites the user to get in touch if they have any further information on the photo. All photos were set to an appropriate size and compressed to minimise loading time.

The responsive grid design presents one column of full width and length photos on smaller screens. On medium size screens, a photos are shown in a three-column grid of equal width and height. On larger screens, this increases to a five-column grid. The rounded-border styling of the photos on medium and large screens envokes a nostalgic feeling. 

#### Events 
A Google Map with clear instructions on how the markers can be used to search for events. As each marker is clicked, the relevant event rises to the top of the list and expands to present more information and instructions on how to sign up to the event.

The responsive grid design presents as one single column in smaller screens and two columns in larger screens.

#### Contact 
A concise form with a clear invitation to get in touch. The text input section provides further suggestions as to what the visitor may wish to get in touch about. Consistent with the signup page, the asterix denotes the required sections. A friendly message, that references the visitor's name, appears when the email has been successfully sent. The thumbs up symbol is inkeeping with the rest of the website.

### Existing Features

* Header Logo - on every page. Acts as a navigation link back to the About page.
* Navigation bar - on every page. Allows users to easily identify the website pages and navigate to the area of their choosing.
* Banner - on every page. Call to action for visitors to join the RPOAS and an easily accessible way to navigate to the signup page.
* Footer links - on every page. Identifies related sites and provides accessible links to each.
* Sign Up Form - an embedded MailChimp form that automatically sends the user's information to the RPOAS Lanarkshire's existing MailChimp account. Those who sign up are automatically added to the mailing list and their details are stored on a database.
* Gallery - allows users to browse through photos, filter by location and/or year and order by year. By clicking on each photo, a modal provides a larger version of the photo with further information about its history. Visitors are invited to get in touch with more info.
* Events - users can either browse through events list or search for an event in a specific area using the Google Maps API. Each event is represented by an accordian that can be expanded to show further information and details on how to sign up.
* Contact - an Emailjs API is used to link with the RPOAS Lanarkshire email account. Users can easily email the RPOAS with any questions, suggestions or information they may have.

### Features Left to Implement

* A news section that provides updates on policing and pension matters. This was not seen as relevant to this milestone project as interactivity would be minimal.
* Link the events page with an API, such as Event Brite. This would allow members to sign up and pay for events in advance. Would require RPOAS Lanarkshire to sign up for an EventBrite account.
* Add a file upload option to the contact page, which would allow members to send in photos to add to the gallery. This option was explored but is only available through subscription to Emailjs.

---
## Technologies Used

* Gitpod
* Github
* HTML and CSS 
* Javascipt - Google Maps, Contact Form, Signup Page, Gallery
* JQuery - navbar, Mailchimp form
* Emailjs API - Contact page
* Google API - Events page
* Mailchimp - embedded signup form
* Bootstrap - grid layout, navbar, modal, signup, contact and gallery search forms
* Google Fonts

---
## Testing

### Tools

The following tools were used to test the website code and layout throughout the development.
* [Google Chrome Developer Tool](https://developers.google.com/web/tools/chrome-devtools/) - used throughout the project to test code and scalability.
* [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) - used throughout the project to resolve layout issues with web pages.
* [Contrast Ratio](https://contrast-ratio.com/) - used to ensure that colours meet readability guidelines.
* [Optimizilla](https://imagecompressor.com/) - used to compress image file sizes to improve loading speed.
* [W3C Markup Validation](https://developers.google.com/web/tools/chrome-devtools/) - used to validate HTML code.
* [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) - used to validate CSS code.

### User Testing

#### All Pages

* Header
    1. Click on the RPOAS logo and RPOAS Lanarkshire title to verify that it links to the About page.
    2. Hover over the title and navigation bar to check that the text-colour changes to gold.
    3. Click on each link on the navigation bar to ensure it links to the appropriate web page.
    4. Change the screen size to ensure that the navigation bar is a burger on smaller screens and fully expanded on medium to large screens.

* Footer
    1. Hover over each link to check that the text changes to gold.
    2. Click on each link to ensure it links to the appropriate web page. External pages should load from a new tab.

* Banner
    1. Hover over the link to check that the text changes to gold.
    2. Click on the link to make sure it leads to the Sign Up page.

* Text and Images
    1. Change the screen resolution to check that the images and font-size adjusts in line with the screen dimensions.

#### About Page

* Links
    1. Hover over each link to ensure that a shadow appears.
    2. Click on each link to check that they lead to the appropriate page. External links should load from a new tab.

* Responsive Grid
    3. Change the screen resolution to verify that the responsive grid design works. The "who should join" and "what we have to offer" boxes should be one column on small to medium screens and side-by-side on two columns on a large screen.

#### Sign Up Page

* Sign Up Form
    1. Press submit button without completing any field.
    2. Press submit without completing all required fields.
    3. Press submit after entering an email input that does not include @.
    4. Press submit with an email address that is already on the mailing list. A message should appear to inform user that the email address is already on the list and a link option for an email to the sent to the address to allow the user to update their details.
    5. Attempt to enter letters in the number fields.
    6. Press submit after completing all required fields and entering a new email address. A message should appear to thank the user for subscribing. An email should be sent to the email address provided in the form.
    7. Client checks MailChimp account to ensure that relevant information is transferred to database is expected format when form is successfully completed.

* Responsive Grid
    1. Change screen resolution to check that fields are mainly in one/two columns in small screens and increase to two/three columns on bigger screens.

#### Gallery Page

* Search Functions
    1. In the search by location input, choose each location in turn to verify that the corresponding photos appear. Ensure that all other search inputs have no selection.
    2. Do the same as above for the search by year tab.
    3. In the sort by year input, choose ascending and descending to check that the photos are ordered appropriately.
    4. Choose a combination of location and year to check that only the relevant photos appear.
    5. Check that the ascending and descending selections work on filtered photo results.

* Photos/Modal
    1. Hover over each photo to check that a gold border appears.
    2. Click on each photo to verify that a modal appears with a larger version of the same photo and corresponding information on that photo.
    3. Click on the email and Facebook links on each modal to ensure that they link to the appropriate pages. Facebook should load in a new tab.
    4. Click on the left and right arrows to ensure that they lead to the previous/next photos.
    5. Click on the X in the top right of the modal to close it.
    6. Click anywhere outside the modal to close it.
    7. Check that the modal presents the relevant information when photos are filtered and/or reordered. 
    8. Check that the modal arrow keys move to the relevant photos when photos are filtered and/or reordered.

* Responsive Grid
    1. Change the screen resolution to check that the responsive grid works as intended. On small screens, the photos should appear on one column with no margins.
    2. On medium screens, the photos should appear in a uniform three column grid with margins.
    3. On large screens, the photos should appear in a uniform five column grid with margins.

#### Events Page

* Google Map API
    1. Double click on the map to zoom in.
    2. Scroll or pinch the touch pad to zoom out.
    3. Check that the zoom buttons work appropriately.
    3. Click on each marker to check that it presents the relevant info window.
    4. Click anywhere on the map to close all open info windows.
    5. Click on each marker to ensure that it brings the relevant event to the top of the events list.

* Events List 
    1. Check that the relevant event rises to the top of the event list and expands when the appropriate marker is clicked.
    2. Hover over each event to check that the background changes to gold.
    3. Click on each event to expand the accordian.
    4. Click on each expanded accordian to ensure that it closes again.
    5. Click on the email and Facebook symbols to ensure that they lead to the appropriate pages. The Facebook page should open in a new window.

* Responsive Grid
    1. Change the screen resolution to check that the boxes present in a single column on small to medium screens and in two columns side-by-side on a large screen.

#### Contact Page

* Contact Form
    1. Press submit button without completing any field.
    2. Press submit once completed some but not all required fields.
    3. Press submit without an @ in the email field.
    4. Press submit when all fields filled in appropriately. The email form should be replaced by a message thanking the user for getting in touch.
    5. Check that successfully submitting the contact form sends an email with all the relevant information to the RPOAS email address 

### User Feedback

Users tested the site on mobile phones, tablets, laptops and desktops. This highlighted a formatting issue that was not detectable using the Google Developers device toolbar. 
Gallery images were stretched on mobile screens. The max height of the container was changed to "min-content", which corrected the issue.

Users tested the site using different bandwidths to ensure that the there were no significant loading time lags, particularly with the gallery and events page. 
Image height/width was set to an appropriate size and file sizes were compressed in order to minimise loading time.

---
## Deployment

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/H4RP3RK/milestone_2_rpoas), the following steps were taken: 

1. From the menu items near the top of the page, select **Settings**.
2. Scroll down to the **GitHub Pages** section.
3. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
4. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
5. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.
 
### How to run this project locally

To clone this project from GitHub:

1. Under the repository name, click "Clone or download".
2. In the Clone with HTTPs section, copy the clone URL for the repository. 
3. In your local IDE open Git Bash.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type ```git clone```, and then paste the URL you copied in Step 3.
```console
git clone https://github.com/H4RP3RK/milestone_2_rpoas.git
```
6. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).

---
## Credits

* Gallery - Wesbos https://beginnerjavascript.com/


### Content

### Media

### Acknowledgements

--------------

# MY NOTES/REMINDERS. NOT PART OF FINAL README

## Milestone Project 2 Marking criteria

Project purpose: Presentation of interactive data
In this project, you'll build an interactive front-end site. The site should respond to the users' actions, 
allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.

Value provided:
Users are able to interact with the site in their particular way, to achieve their personal goals and derive answers to their specific questions.
The site owner advances their own goals by providing this functionality, potentially by being a regular user themselves.

Mandatory Requirements
A project violating any of these requirements will FAIL

1. Dynamic Front End Project: Write custom JavaScript, HTML and CSS code to create a front-end web application consisting of one or more HTML pages with significant interactive functionality.
2. Site Responses: Use JavaScript to have the site produce relevant responses dependent on users' actions.
3. Information Architecture: Incorporate a main navigation menu (unless irrelevant) and structured layout (you might want to use Bootstrap to accomplish this).
4. Documentation: Write a README.md file for your project that explains what the project does and the value that it provides to its users.
5. Version Control: Use Git & GitHub for version control.
6. Attribution: Maintain clear separation between code written by you and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README.
7. Deployment: Deploy the final version of your code to a hosting platform such as GitHub Pages.

Usability and Visual Impact:
* Project Purpose
* UX design
* Suitability for purpose
* Navigation
* Ease of use
* Information Architecture
* Defensive Design
Layout and Visual Impact:
* Responsive Design
* Image Presentation
* Colour scheme and typography
Code Quality:
* Appropriate use of HTML
* Appropriate use of CSS
* Appropriate use of JavaScript
* Appropriate use of JavaScript APIs
Software Development practices:
* Directory Structure and File Naming
* Version control
* Testing implementation
* Testing write-up
* Readme file
* Comments
* Deployment implementation
* Deployment write-up

## To Do
### Readme
x Fix links to wireframes
x Home Wireframe

### Home Page
x Add Gallery of committee members
x Hover over/Click on faces for more info
- Call to action signup

### Sign Up
x Form
x Link to database (Mailchimp?)
x Paypal link?

### Gallery
x Style modal
x Fix bug, no results message clear with each new search 
x search by location
x search by year
x search by location and year at same time
x clear search results with each form submit
x fix modal to work with search function
x Order by asc/desc year
x How do I show photos that don't have year/location info?
x Style photos (hover)
x How do I search when there's more than one location?
- Operate Gallery with keyboard
- Can select list be creating automatically?

### Events
x change the lnglats of markers to match with towns
x add events
x expand events list when marker clicked
x don't delete info window content when another is clicked
x close infowindow when another is clicked
x style accordians


### Contact
x Form
x link to dad's email
x Add button to upload photos
x Fix bug that won't include attachments on emails (can't do without paying emailjs subscription)
x Clear form once email is sent
x Expand free text section
- Fit footer to bottom when success message is displayed

## Problems/Questions
x How do I link contact form with Mailchimp?
x Why are there red crosses next to some of my github pushes?
x How do I connect file upload to contact form? (can't do with paying emailjs subscription)
x How can I get the contact form to clear when send button is pressed?
- How can the Gallery be operated by keyboard?
- Why is banner on events page bold?
- Why are photos taking so long to load? Starting happening after asc/desc js was fixed


