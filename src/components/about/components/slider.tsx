import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Slider: React.FC = () => {
    return <Carousel fade controls={false}>
    <Carousel.Item style={{height: '350px', backgroundImage: "url('/images/face.jpg')", backgroundSize: 'cover'}}>
      {/* <img src='/images/face.jpg' />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item style={{height: '350px', backgroundImage: "url('/images/inventionland-flying-apps-1.jpg')", backgroundSize: 'cover'}}>
    {/* <img src='/images/inventionland-flying-apps-1.jpg' />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item style={{height: '350px',  backgroundImage: "url('/images/web-apps-t.jpg')", backgroundSize: 'cover'}}>
    {/* <img src='/images/web-apps-t.jpg' />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item style={{height: '350px',  backgroundImage: "url('/images/website-vs-web-application-banner.jpg')", backgroundSize: 'cover'}}>
    {/* <img src='/images/website-vs-web-application-banner.jpg' />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item style={{height: '350px',  backgroundImage: "url('/images/world.png')", backgroundSize: 'cover'}}>
    {/* <img src='/images/world.jpg' />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>
}

export default Slider