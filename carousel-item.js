class CarouselItem {
  constructor(domNode, carouselObj) {
    this.domNode = domNode;
    this.carousel = carouselObj;
  }

  init() {
    this.domNode.addEventListener('focusin', this.handleFocusIn.bind(this));
    this.domNode.addEventListener('focusout', this.handleFocusOut.bind(this));
  }

  hide() {
    this.domNode.classList.remove('active');
  }

  show() {
    this.domNode.classList.add('active');
  }

  handleFocusIn() {
    this.domNode.classList.add('focus');
    this.carousel.hasFocus = true;
    this.carousel.updateRotation();
  }

  handleFocusOut() {
    this.domNode.classList.remove('focus');
    this.carousel.hasFocus = false;
    this.carousel.updateRotation();
  }
}