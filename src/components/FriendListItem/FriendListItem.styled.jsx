import styled from "@emotion/styled";

export const FriendWrap = styled.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 10px;
    width: 300px;
    height: 70px;
    padding: 20px;
    align-items: center;   
    box-shadow: 1px 1px 2px 2px rgb(156, 150, 150);
`;

export const Status = styled.span`
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-right: 20px;
    
    background-color: ${
        
        isOnline => {
            console.log("bgisOn", isOnline.isOnline);
            switch(isOnline.isOnline) {
                case true: return 'green';
                case false: return 'red';
                default: return 'none';
            }
        }
    };
    
`;

export const Avatar = styled.img`
    margin-right: 20px;
    background-color: rgb(227, 245, 239);
    border-radius: 10%;
    padding: 5px;
`;

export const Name = styled.p`
    font-weight: bold;
`;