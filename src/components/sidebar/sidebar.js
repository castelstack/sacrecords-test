
import React from 'react';
import styled from 'styled-components';

//import Logo from '../../components/logo/logo';
import Menulist from '../menu/menuitem'


//styles
const Container = styled.div`
display: grid;
grid-template-rows: 5rem min-content;

height: min-content;

background: #FDFDFD;

`
//const LogoBox = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;

// width: 15rem
// `


const Sidebar = () => {
    return (
        <Container >
            
            {/* <LogoBox>
                
            <Logo />
       </LogoBox> */}
            <Menulist />
       
</Container>

    )
}

export default Sidebar;