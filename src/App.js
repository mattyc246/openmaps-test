import React, { useState } from 'react';
import styled from 'styled-components/macro';

import 'leaflet/dist/leaflet.css';

import OSMap from './components/Map';
import TestingTools from './components/TestingTools';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
`;
const FlexWrapper = styled.div`
  display: flex;
`;
const Column = styled.div`
  flex: 1;
  min-height: 500px;
  margin: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

function App() {
  const [polyLine, setPolyLine] = useState(null);
  const [gogetterLocation, setGogetterLocation] = useState(null);

  return (
    <Container>
      <FlexWrapper>
        <Column>
          <TestingTools
            setPolyLine={setPolyLine}
            setGogetterLocation={setGogetterLocation}
          />
        </Column>
        <Column>
          <OSMap polyLine={polyLine} gogetterLocation={gogetterLocation} />
        </Column>
      </FlexWrapper>
    </Container>
  );
}

export default App;
