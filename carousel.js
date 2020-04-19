class Carousel {
  constructor(domNode) {
    this.domNode = domNode;
    this.items = [];
    this.firstItem = null;
    this.lastItem = null;
    this.currentDomNode = null;
    this.liveRegionNode = null;
    this.currentItem = null;
    this.pauseButton = null;
  
    this.playLabel = 'Start automatic slide show';
    this.pauseLabel = 'Stop automatic slide show';
  
    this.rotate = true;
    this.hasFocus = false;
    this.hasHover = false;
    this.isStopped = false;
    this.timeInterval = 5000;
  } 

  init() {
    let elems, elem, button, items, item, imageLinks;

    this.liveRegionNode = this.domNode.querySelector('.carousel-items');
    items = this.domNode.querySelectorAll('.carousel-item');

    Object.keys(items).forEach((index) => {
      item = new CarouselItem(items[index], this);
      item.init();
      this.items.push(item);

      if (!this.firstItem) {
        this.firstItem = item;
        this.currentDomNode = item.domNode;
      }
      this.lastItem = item;
  
      imageLinks = items[index].querySelectorAll('.carousel-image a');
  
      if (imageLinks && imageLinks[0]) {
        imageLinks[0].addEventListener('focus', this.handleImageLinkFocus.bind(this));
        imageLinks[0].addEventListener('blur', this.handleImageLinkBlur.bind(this));
      }
    });

    elems = document.querySelectorAll('.carousel .controls button');

    Object.keys(elems).forEach((index) => {
      elem = elems[index];

      if (elem.classList.contains('rotation')) {
        button = new PauseButton(elem, this);
        this.pauseButton = elem;
        this.pauseButton.classList.add('pause');
        this.pauseButton.setAttribute('aria-label', this.pauseLabel);
      } else {
        button = new CarouselButton(elem, this);
      }

      button.init();
    });

    this.currentItem = this.firstItem;
    this.domNode.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.domNode.addEventListener('mouseout', this.handleMouseOut.bind(this));

    setTimeout(this.rotateSlides.bind(this), this.timeInterval);    
  }

  setSelected(newItem, moveFocus) {
    if (typeof moveFocus !== 'boolean') {
      moveFocus = false;
    }

    Object.keys(this.items).forEach((index) =>{
      this.items[index].hide();
    });

    this.currentItem = newItem;
    this.currentItem.show();
  
    if (moveFocus) {
      this.currentItem.domNode.focus();
    }
  }

  setSelectedToPreviousItem (currentItem, moveFocus) {
    if (typeof moveFocus !== 'boolean') {
      moveFocus = false;
    }
  
    let index;
  
    if (typeof currentItem !== 'object') {
      currentItem = this.currentItem;
    }
  
    if (currentItem === this.firstItem) {
      this.setSelected(this.lastItem, moveFocus);
    } else {
      index = this.items.indexOf(currentItem);
      this.setSelected(this.items[index - 1], moveFocus);
    }
  }

  setSelectedToNextItem (currentItem, moveFocus) {
    if (typeof moveFocus !== 'boolean') {
      moveFocus = false;
    }
  
    var index;
  
    if (typeof currentItem !== 'object') {
      currentItem = this.currentItem;
    }
  
    if (currentItem === this.lastItem) {
      this.setSelected(this.firstItem, moveFocus);
    } else {
      index = this.items.indexOf(currentItem);
      this.setSelected(this.items[index + 1], moveFocus);
    }
  }

  rotateSlides() {
    if (this.rotate) {
      this.setSelectedToNextItem();
    }
    setTimeout(this.rotateSlides.bind(this), this.timeInterval);
  }

  updateRotation() {
    if (!this.hasHover && !this.hasFocus && !this.isStopped) {
      this.rotate = true;
      this.liveRegionNode.setAttribute('aria-live', 'off');
    } else {
      this.rotate = false;
      this.liveRegionNode.setAttribute('aria-live', 'polite');
    }
  
    if (this.isStopped) {
      this.pauseButton.setAttribute('aria-label', this.playLabel);
      this.pauseButton.classList.remove('pause');
      this.pauseButton.classList.add('play');
    } else {
      this.pauseButton.setAttribute('aria-label', this.pauseLabel);
      this.pauseButton.classList.remove('play');
      this.pauseButton.classList.add('pause');
    }
  }

  toggleRotation() {
    if (this.isStopped) {
      if (!this.hasHover && !this.hasFocus) {
        this.isStopped = false;
      }
    } else {
      this.isStopped = true;
    } 
    this.updateRotation();
  }

  handleImageLinkFocus() {
    this.liveRegionNode.classList.add('focus');
  }

  handleImageLinkBlur() {
    this.liveRegionNode.classList.remove('focus');
  }

  handleMouseOver(event) {
    if (!this.pauseButton.contains(event.target)) {
      this.hasHover = true;
    }
    this.updateRotation();
  }

  handleMouseOut() {
    this.hasHover = false;
    this.updateRotation();
  }
}

window.addEventListener('load', () => {
  let carousels = document.querySelectorAll('.carousel');
  let carousel = {}; 

  Object.keys(carousels).forEach((elem) => {
    carousel = new Carousel(carousels[elem]);
    carousel.init()
  });
}, false);
