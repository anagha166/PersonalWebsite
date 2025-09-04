import Page from '../../Components/Page';
import Hero from './Hero';
import MainHomeGallery from './MainHomeGallery';
import MainHomeAbout from './MainHomeAbout';
import ContactMe from '../../Components/ContactMe';
import { useRef } from 'react';

const Landing = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null!);
  return (
    <Page>
      <Hero AboutMeRef={aboutMeRef}/>
    </Page>
  );
};

export default Landing;
