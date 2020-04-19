Auto-Rotating Image Carousel Example Design for Accessibility 

The following implementation of the carousel design pattern demonstrates features of the pattern that are essential to accessibility for carousels that automatically start rotating when the page loads. For instance, rotation stops when users move focus to any control or link in the carousel or hover the mouse over carousel content. The accessibility features section that follows the example describes these features in detail. The carousel and its description are adapted from the W3 organization.

Example View Options

Carousel controls and captions displayed on image: This option is less accessible than the other option because the controls are harder to perceive and captions are more difficult to read with rotating images behind them.

Carousel controls and captions displayed above and below the image: This option is preferable because controls and captions are easier to perceive.

Accessibility Features
Controlling Automatic Slide Rotation
Users can stop and start slide rotation, which is an essential aspect of accessibility of the carousel for a variety of people with disabilities. People with low vision or a cognitive disability that effects visual processing or reading benefit from being able to control slide rotation so they have sufficient time to explore slide content. Similarly, since screen reader users cannot perceive automatic rotation, it can make reading the page confusing and disorienting. For example, when slides are automatically rotating, a screen reader user may read an element on slide one, execute a screen reader command to read the next element, and, instead of hearing the next element on slide one, hear an element from slide 2 without any knowledge that the element just announced is from an entirely new context.

This example includes the following features for giving users control over slide rotation:

Hovering the mouse over any carousel content pauses automatic rotation. Automatic rotation resumes when the mouse moves away from the carousel unless another condition, such as keyboard focus, that prevents rotation has been triggered.
Moving keyboard focus to any of the carousel content, including the next and previous slide elements, pauses automatic rotation. Automatic rotation resumes when keyboard focus moves out of the carousel content unless another condition, such as mouse hover, that prevents rotation has been triggered.
The carousel also contains a rotation control button that can stop and start automatic rotation.
The rotation control button is the first element in the screen reader reading order.
The rotation control button is always visible so it is available to all users whether they are interacting via a mouse, keyboard, assistive technology, or touch.
If the carousel is rotating, its accessible name is Stop Automatic Slide Show, informing screen reader users that the slides are changing in addition to providing a way to stop the changes.
If the carousel is not rotating, the accessible name of the button is Start Automatic Slide Show.
If a user has activated the button to stop the show, the rotation will only restart if the button is activated. Moving keyboard focus or the mouse out of the carousel will not restart rotation.
If keyboard focus is inside the carousel, or if the mouse is hovering over the carousel, the button is disabled; it cannot be used to start rotation.
Color Contrast of Text and Rotation Controls
In the view of this carousel where the controls and captions are displayed on top of the image, the background images can cause color contrast for the controls and text to become insufficient. This view includes the following features to meet WCAG 2.1 color contrast requirements:

When the rotation control, next slide, and previous slide buttons are rendered on top of the carousel images, the buttons have forground and background colors that meet WCAG 2.1 color contrast requirements. In addition, the focus styling uses SVG images that make the focus indicator highly visible when a control receives keyboard focus.
The transparency of the caption area is decreased so the caption text meets the WCAG 2.1 color contrast requirements.
Screen Reader Announcement of Slide Changes
When automatic rotation is turned off, the carousel slide content is included in a live region. This makes it easier for screen reader users to scan through the carousel slides. When screen reader users activate the next or previous slide button , the new slide content is announced, giving users immediate feedback that helps them determine whether or not to interact with the content. Very importantly, if automatic rotation is turned on, the live region is disabled. If it were not, the page would be come unusable as announcements of the continuously changing content constantly interrupt anything else the user is reading.

Keyboard Support

Rotation Control Button

Tab
- Moves focus through interactive elements in the carousel
- Rotation control, previous slide, and next slide buttons precede the slide content in the Tab sequence

Enter or Space	
- Toggle the auto rotation of slides in the carousel

Next and Previous Slide Buttons

Enter, Space	
- Display next or previous slide in the carousel.