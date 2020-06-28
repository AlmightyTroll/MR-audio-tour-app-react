import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';



function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const renderCarouselItems = () => {
      // input images = [{...}, {...}]
      return props.images.map( (image) => {
        const { imageUrl, imageAlt } = image;
        return (
          <Carousel.Item key={imageUrl} >
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + imageUrl}
              alt={imageAlt}
            />
          </Carousel.Item>
        )
      })
      
      // Output [<Carousel.Item> ... </Carousel.Item>, <Carousel.Item> ... </Carousel.Item> ]
    }

    /*
    const renderCarouselItems2 = () => {
      // input images = [{...}, {...}]
      const carouselItems = [];
      props.images.forEach( (image) => {
        const { imageUrl, imageAlt, doNotDisplay } = image;
        if (!doNotDisplay) {
          carouselItems.push(
            <Carousel.Item key={imageUrl} >
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + imageUrl}
                alt={imageAlt}
              />
            </Carousel.Item>
          )
        }
      })
      return carouselItems;
      // Output  [ <Carousel.Item> ... </Carousel.Item> ]
    }
     */
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {renderCarouselItems()}
      </Carousel>
    );
  }

  //render(<ControlledCarousel />);

  export default ControlledCarousel;