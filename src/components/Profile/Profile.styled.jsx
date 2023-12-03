import styled from '@emotion/styled';


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

export const ProfileAvatar = styled.img`
    display: block;
    margin: 0 auto;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: gray;
    margin-bottom: 30px;        
`;

export const TextWrap = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-bottom: 5px;
`;

export const Tag = styled.p`
    margin-bottom: 5px;
    color: gray;
    font-size: 15px;
`;

export const Location = styled.p`
    color: gray;
    font-size: 15px;
`;

export const Stats = styled.ul`
    display: flex;
    width: 100%;
    height: 79px;
    list-style: none;
`;

export const StatsItem = styled.li`
    border: 0.01px solid rgb(197, 194, 194);
    width: 100px;
    position: relative;
    border-bottom: none;

    &:first-of-type {
        border-bottom-left-radius: 3%;
        border-left: none;
    }

    &:last-child {
        border-bottom-right-radius: 3%;
        border-right: none;
    }
`;

export const StatsItemContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Quantity = styled.span`
    display: block;
    text-align: center;
    color:black;
    font-size: 18px;
    font-weight: bold;
`;

export const Label = styled.span`
    color: rgb(70, 67, 67);
    font-size: 18px;  
`;