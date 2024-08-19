import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function BbsList(){
    return(
        <Wrapper>
            return(
                <BbsItem/>
            );
        </Wrapper>
    );
}

export default BbsList;