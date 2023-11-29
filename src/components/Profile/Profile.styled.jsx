import styled from 'styled-components';

export const ProfileWrap = styled.div`
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    margin: 0 auto;
    background-color: rgb(210, 210, 247);
    width: 100vw;
    height: 605px
`; 

export const ProfileInfo = styled.div`
  
position: absolute;              
    top: 50%;  
    left: 50%;                      
    transform: translate(-50%, -50%);
    background-color: rgba(196, 243, 241, 0.986);
    width: 300px;
    height: 395px;
    border-radius: 3%;
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgb(197, 194, 194);
`;

export const Description = styled.div` 
    padding: 40px;
    background-color: white;
    border-top-left-radius: 3%;
    border-top-right-radius: 3%;
    height: 316px;
    border:none;
`;

export const Avatar = styled.img`
    display: block;
    margin: 0 auto;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: gray;
    margin-bottom: 30px;        display: block;
    margin: 0 auto;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: gray;
    margin-bottom: 30px;        
`;