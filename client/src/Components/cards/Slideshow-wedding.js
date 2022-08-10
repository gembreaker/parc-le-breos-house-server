import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://parc-le-breos.co.uk/wp-content/uploads/photo-gallery/Wedding-at-Parc-Le-Breos-88.jpg',
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: 'https://parc-le-breos.co.uk/wp-content/uploads/photo-gallery/Wedding-at-Parc-Le-Breos-98.jpg',
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: 'https://parc-le-breos.co.uk/wp-content/uploads/photo-gallery/water3_.jpg',
    altText: 'Slide 3',
    key: '3'
  }
];

const Slideshow = () => <UncontrolledCarousel items={items} />;

export default Slideshow;