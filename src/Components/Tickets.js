// import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



 export default function Tickets(props) {
  const singleDayTickets = props.tickets.filter(x => 
   x.Days === 1
   )
   const multiDayTickets = props.tickets.filter(x => 
    x.Days === 4
   )

  console.log(singleDayTickets)
  const singleDayCards = singleDayTickets.map((eachTicket) => {
   return <Col xs={12} md={4} sm={6} lg={4} className='p-2'><Card>
   <Card.Img alt='Star Wars Fans' variant='bottom' src={eachTicket.Img} />
   <Card.Body>
       <Card.Title>{eachTicket.Title}</Card.Title>
       <Card.Text style={{ height: '50px' }}>{eachTicket.Text}</Card.Text>
       <Button variant="primary" disabled>Coming soon!</Button>
   </Card.Body>
</Card> 
</Col>
  })

  const multiDayCards = multiDayTickets.map((eachTicket) =>{
   return <Col xs={12} md={6} sm={6} lg={6} className='p-2'><Card>
    <Card.Img alt='Star Wars Fans' variant='bottom' src={eachTicket.Img} />
    <Card.Body>
        <Card.Title>{eachTicket.Title}</Card.Title>
        <Card.Text style={{ height: '50px' }}>{eachTicket.Text}</Card.Text>
        <Button variant="primary" disabled>Coming soon!</Button>
    </Card.Body>
</Card> 
</Col>
  })

//   const displayTickets = props.tickets.map((eachTicket) => { 
//    const multiDay = eachTicket.MultiDay
//    if (multiDay === true){
//     return <Col xs={12} md={6} sm={6} lg={6} className='p-2'><Card>
//     <Card.Img alt='Star Wars Fans' variant='bottom' src={eachTicket.Img} />
//     <Card.Body>
//         <Card.Title>{eachTicket.Title}</Card.Title>
//         <Card.Text style={{ height: '50px' }}>{eachTicket.Text}</Card.Text>
//         <Button variant="primary" disabled>Coming soon!</Button>
//     </Card.Body>
// </Card> 
// </Col>
//    }else{
//     return <Col xs={12} md={4} sm={6} lg={4} className='p-2'><Card>
//     <Card.Img alt='Star Wars Fans' variant='bottom' src={eachTicket.Img} />
//     <Card.Body>
//         <Card.Title>{eachTicket.Title}</Card.Title>
//         <Card.Text style={{ height: '50px' }}>{eachTicket.Text}</Card.Text>
//         <Button variant="primary" disabled>Coming soon!</Button>
//     </Card.Body>
// </Card> 
// </Col> 
//      }

// })


  return (
   <div>
    <h1>Multi Day Passes</h1>
        <Container>
          <Row>
                {multiDayCards}
          </Row>
        </Container>
        <h1>Single Day Passes</h1>
        <Container>
          <Row>
               {singleDayCards}
          </Row>
        </Container>
   </div>
  )       
}

// export default function Tickets(props) {
//  const displayTickets = props.tickets.map((eachTicket) => {
//      return <ListGroup.Item>{eachTicket}</ListGroup.Item>
//  })

 // return (
 //        <Container>
 //            <Card>
 //                <Card.Body>
 //                    <Card.Title>Our packages</Card.Title>
 //                    <Card.Text>Check out our packages!</Card.Text>
 //                </Card.Body>
 //                <Card.Img style={{'width': '50%', 'margin': '0 auto' }} alt='Star Wars Fans' variant='bottom' src='Images/VIP-Tix.jpg' />
 //            </Card>
 //            <ListGroup>
 //                {displayTickets}
 //            </ListGroup>
 //        </Container>
 // )
 //}
