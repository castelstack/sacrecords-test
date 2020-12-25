import React from "react";
import CustomButton from '../../components/button/button.components';
import Folder from '../../images/backup/Folder.svg'
import styled from "styled-components";

const Container = styled.div({
  width: "407px",
  height: "456px",

  borderRadius: "32px",
  display: 'grid',
  gridTemplateRows: 'repeat(4,min-content)',
  gridGap: '.8rem'
});

const LastBackupInfo = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const LastBackupFiles = styled.div({})
const BackupText = styled.h2({
 
fontWeight: '500',
fontSize: '16px',
lineHeight: '14px',
/* or 87% */


color: '#979797',
})

const BackupTime = styled.h2({
  fontWeight: "normal",
  fontSize: "18px",
  color: "#061058",

  })
const FolderIcon = styled.img({})
const Backup = () => {
  return <Container>
      <FolderIcon src={Folder} alt='Backup Files' />
    <LastBackupInfo>
      <BackupText>Last Backup was at: </BackupText><BackupTime>{`${' 6:34am 09/56/2020'}`}</BackupTime>
      </LastBackupInfo>
      <LastBackupFiles></LastBackupFiles>
      <CustomButton value='Backup new files' big/>
  </Container>;
};

export default Backup;
