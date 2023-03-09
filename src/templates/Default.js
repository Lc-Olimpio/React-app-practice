import Container from '@mui/material/Container';
import { padding } from '@mui/system';

import Header from "../partials/header/Header";

const Default = ({children}) => {
  return(
    <>
      <Header />
        <Container maxWidth="lg" sx={{padding: '15px 0px'}}>
          {children}
        </Container>
    </>
  )
}

export default Default