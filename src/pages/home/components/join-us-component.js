import { Button } from '@mui/material';
import styled from '@emotion/styled';

import { Subtitle } from './styled-components';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: aliceblue;
`;

export default function Component({ language }) {
  return (
    <DivContainer>
      <Subtitle>Join 15 million people who already use Ecosia</Subtitle>
      <div>&nbsp;</div>
      <div>
        <Button color='primary' variant="contained">Share Ecosia</Button>
      </div>
    </DivContainer>
  )
}
