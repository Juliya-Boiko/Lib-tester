import styled from "styled-components";
import { Container } from "components/common/Container";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Slide = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: linear-gradient(
    252.43deg, 
    #D45B78 0.01%,
    #4B3862 101.01%);
`;

export const KeenSlider = () => {
  const [sliderRef] = useKeenSlider(
    // {
    // slideChanged() {
    //   console.log('slide changed')
    // },
    // }, []
  );

  return (
    <Container>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Slide>Slide1</Slide>
        </div>
        <div className="keen-slider__slide">
          <Slide>Slide2</Slide>
        </div>
        <div className="keen-slider__slide">
          <Slide>Slide3</Slide>
        </div>
      </div>
    </Container>
  );
}