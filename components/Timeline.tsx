import styled from 'styled-components'

interface ITransaction {
    walletId: string
    transactionId: string
    date: string
    price: string
}

interface ITimelineProps {
    transactions: ITransaction[]
}

const Timeline: React.FC<ITimelineProps> = ({ transactions }) => {
    return (
        <Container>
            <List>
                {transactions.map(({walletId, transactionId, date, price}, index) => (
                    <ListItem key={transactionId} right={Boolean(index % 2 !== 0)}>
                        <ListItemContainer>
                            <h3>Owner: {walletId}</h3>
                            <h4>Price: {price}</h4>
                            <TransactionId>Transaction Id: {transactionId}</TransactionId>
                            <div>Date: {date}</div>
                        </ListItemContainer>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

const Container = styled.section`
    width: 40rem;
    padding: 20px;
    position: relative;
    margin-bottom: 40px;

    h3 {
        margin: 0;
    }

    h4 {
        margin-top: 10px;
    }

    &::after {
        position: absolute;
        content: "";
        top: 0;
        right: 50%;
        height: 100%;
        width: 3px;
        transform: translateX(50%);
        background: gold;
    }

`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
`;


const ListItem = styled.li<{right: boolean}>`
    position: relative;
    width: 50%;
    align-self: ${({ right }) => right ? 'flex-end': 'initial'};
    ${({ right }) => right ? 'padding-left: 10px;': 'padding-right: 10px;'};
`;

const ListItemContainer = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    background: #f8f8f8;
    border: 1px solid #e7e7e7;
    width: 100%;
`;

const TransactionId  = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
`


export default Timeline;