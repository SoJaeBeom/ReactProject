import styled from 'styled-components';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';

export default function BannerSection() {
  const imageList = [one, two, three, four, five];

  return (
    <Container>
      <Wrap>
        <Button>prev</Button>
        <ImageCarouselWrapper>
          <ImageCarousel>
            {imageList.map((image) => {
              return <Image src={image} alt={image} />;
            })}
          </ImageCarousel>
          <DotWrapper>
            {imageList.map((i) => {
              return <Dot id={i} />;
            })}
          </DotWrapper>
        </ImageCarouselWrapper>
        <Button>next</Button>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 30rem;
  text-align: center;
`;

const Wrap = styled.div`
  display: flex;
  border: 1px solid green;
`;

const Button = styled.button`
  height: 4rem;
`;

const Image = styled.img`
  width: 50rem;
`;

const ImageCarouselWrapper = styled.div`
  width: 50rem;
  margin: auto;
  border: 1px solid blue;
  overflow: hidden;
`;

const ImageCarousel = styled.div`
  display: flex;
`;

const DotWrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;

const Dot = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid green;
  margin: 1rem;
`;
