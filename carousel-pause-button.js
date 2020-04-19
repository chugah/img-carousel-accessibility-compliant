class PauseButton {
  constructor (domNode, carouselObj) {
    this.domNode = domNode;
    this.carousel = carouselObj;
  }

  handleClick() {
    this.carousel.toggleRotation();
  }

  init() {
    this.domNode.addEventListener('click', this.handleClick.bind(this));
  }
}