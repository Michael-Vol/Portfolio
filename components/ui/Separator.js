import { GridItem } from '@chakra-ui/react';
import Navbar from './Navbar';

const Separator = () => {
  return (
    <GridItem
      className="separator"
      h={'2px'}
      backdropFilter={'blur(5px)'}
      bgColor={'#262C4D'}
      mt={'0vh'}
    />
  );
};

export default Separator;
