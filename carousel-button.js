class CarouselButton {
  constructor(domNode, carouselObj) {
    this.domNode = domNode;
    this.carousel = carouselObj;
    this.direction = 'previous';

    if (this.domNode.classList.contains('next')) {
      this.direction = 'next';
    }

    this.keyCode = Object.freeze({
      'RETURN': 13,
      'SPACE': 32,
      'END': 35,
      'HOME': 36,
      'LEFT': 37,
      'UP': 38,
      'RIGHT': 39,
      'DOWN': 40
    });
  }

  init() {
    this.domNode.addEventListener('click', this.handleClick.bind(this));
    this.domNode.addEventListener('focus', this.handleFocus.bind(this));
    this.domNode.addEventListener('blur', this.handleBlur.bind(this));
  }

  changeItem() {
    this.direction === 'previous' ? 
      this.carousel.setSelectedToPreviousItem() : 
      this.carousel.setSelectedToNextItem();
  }

  handleClick() {
    this.changeItem();
  }

  handleFocus() {
    this.carousel.hasFocus = true;
    this.domNode.classList.add('focus');
    this.carousel.updateRotation();
  }

  handleBlur() {
    this.carousel.hasFocus = false;
    this.domNode.classList.remove('focus');
    this.carousel.updateRotation();
  }
}