import styled from 'styled-components';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';

export default function BannerSection() {
  return (
    <Container>
      <Image src={one} alt='one' />
      <Image src={two} alt='two' />
      <Image src={three} alt='three' />
      <Image src={four} alt='four' />
      <Image src={five} alt='five' />
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 30rem;
  text-align: center;
`;

const Image = styled.img`
  width: 50rem;
`;
