import Carousel from 'react-bootstrap/Carousel';
import { useLoaderData } from 'react-router-dom';

const SliderBeranda = () => {
  const { slider } = useLoaderData();
  return (
    <Carousel className="carousel-inner" interval={3000}>
      {slider.map((item) => {
        return (
          <Carousel.Item key={item.slide_id}>
            <img
              className="d-block w-100"
              src={
                'https://kominfo.kotabogor.go.id/asset/images/web/slide/' +
                item.gambar
              }
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default SliderBeranda;
