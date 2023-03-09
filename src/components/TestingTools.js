import Openrouteservice from 'openrouteservice-js';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { decodePolyline } from '../services/polylineDecoder';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const InputWrap = styled.div`
  margin: 0.5rem 0;
`;

const API_KEY = process.env.REACT_APP_ORS_TOKEN;

const TestingTools = ({ setPolyLine, setGogetterLocation }) => {
  // Start at KLCC
  const [startLat, setStartLat] = useState(3.158539);
  const [startLong, setStartLong] = useState(101.705143);
  // End at 1Utama
  const [endLat, setEndLat] = useState(3.131958);
  const [endLong, setEndLong] = useState(101.604503);
  // GG Location
  const [ggLat, setGGLat] = useState(3.15859);
  const [ggLong, setGGLong] = useState(101.701838);

  // // Start at KLCC
  // const [startLat, setStartLat] = useState(3.170352);
  // const [startLong, setStartLong] = useState(101.665981);
  // // End at Publika
  // const [endLat, setEndLat] = useState(3.164453);
  // const [endLong, setEndLong] = useState(101.647441);

  const handleSubmit = () => {
    let orsDirections = new Openrouteservice.Directions({ api_key: API_KEY });

    orsDirections
      .calculate({
        coordinates: [
          [startLong, startLat],
          [endLong, endLat]
        ],
        profile: 'driving-car',
        instructions: false,
        format: 'json'
      })
      .then((json) => {
        const polyline = decodePolyline(json.routes[0].geometry, false);
        setPolyLine(polyline);
        setGogetterLocation([ggLat, ggLong]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FlexContainer>
      <InputWrap>
        <p>Start Lat</p>
        <input
          type="text"
          value={startLat}
          onChange={(e) => setStartLat(e.target.value)}
        />
      </InputWrap>
      <InputWrap>
        <p>Start Long</p>
        <input
          type="text"
          value={startLong}
          onChange={(e) => setStartLong(e.target.value)}
        />
      </InputWrap>
      <InputWrap>
        <p>End Lat</p>
        <input
          type="text"
          value={endLat}
          onChange={(e) => setEndLat(e.target.value)}
        />
      </InputWrap>
      <InputWrap>
        <p>End Long</p>
        <input
          type="text"
          value={endLong}
          onChange={(e) => setEndLong(e.target.value)}
        />
      </InputWrap>
      <InputWrap>
        <p>GG Lat</p>
        <input
          type="text"
          value={ggLat}
          onChange={(e) => setGGLat(e.target.value)}
        />
      </InputWrap>
      <InputWrap>
        <p>GG Long</p>
        <input
          type="text"
          value={ggLong}
          onChange={(e) => setGGLong(e.target.value)}
        />
      </InputWrap>
      <button onClick={handleSubmit}>Submit</button>
    </FlexContainer>
  );
};

export default TestingTools;
