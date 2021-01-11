import React,
{
    Component
}

from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
class App extends Component {
    constructor(props) {
        super(props);
        var date=new Date();
        var h=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        var day_part="AM";
        if (h===0) {
            h=12;
        }
        if (h > 12) {
            h -=12;
            day_part="PM";
        }
        h=(h < 10) ? "0"+h: h;
        m=(m < 10) ? "0"+m: m;
        s=(s < 10) ? "0"+s: s;
        var time=h+":"+m+":"+s+" "+day_part;
        var d=date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate();
        var weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
        var n=weekday[date.getDay()];
        var dateTime=n+" "+d;
        this.state= {
            currentTime: dateTime, userInput: "", list: []
        }
    }
    updateInput(value) {
        this.setState( {
            userInput: value,
        }
        );
    }
    addItem() {
        if(this.state.userInput !=='') {
            const userInput= {
                id: Math.random(), value: this.state.userInput
            }
            ;
            const list=[...this.state.list];
            list.push(userInput);
            this.setState( {
                list, userInput: ""
            }
            );
        }
    }
    deleteItem(key) {
        const list=[...this.state.list];
        const updateList=list.filter(item=> item.id !==key);
        this.setState( {
            list: updateList,
        }
        );
    }
    render() {
        return(<Container style= {
            {
                backgroundColor: '#ff6666',
            }
        }
        ><div style= {
            {
                backgroundColor: '#000066',
            }
        }
        > <div><Row style= {
            {
                display: "block", justifyContent: "center", alignItems: "center", fontSize: '3rem', fontWeight: 'bolder', fontFamily: 'Lucida Handwriting', textAlign: 'center', color: 'white',
            }
        }
        >Tracker <h3> Your <span style= {
            {
                color: "blue",
            }
        }
        >T</span><span style= {
            {
                color: "red",
            }
        }
        >O</span><span style= {
            {
                color: "green",
            }
        }
        >D</span><span style= {
            {
                color: "yellow",
            }
        }
        >O</span> list </h3><div> {
            this.state.currentTime
        }
        </div > </Row></div> <hr style= {
            {
                borderTop: '1px solid white',
            }
        }
        /> <div style= {
            {
                height: '580px',
            }
        }
        > <Row> <Col md= {
            {
                span: 5, offset: 4
            }
        }
        > <InputGroup className="mb-3"> <FormControl placeholder="Add a task" size="lg" value= {
            this.state.userInput
        }
        onChange= {
            item=> this.updateInput(item.target.value)
        }
        aria-label="add something" aria-describedby="basic-addon2" /> <InputGroup.Append> <Button variant="info" size="lg" onClick= {
            ()=>this.addItem()
        }
        > ADD </Button> </InputGroup.Append> </InputGroup> </Col> </Row> <Row><div style= {
            {
                backgroundColor: 'none', position: 'relative', display: 'block', justifyContent: "center", textAlign: 'center', margin: 'auto', width: '700px',
            }
        }
        > <Col md= {
            {
                span: 5, offset: 4
            }
        }
        > <div><ListGroup variant="flush"> {
            this.state.list.map(item=> {
                return( <ListGroup.Item action onDoubleClick= {
                    ()=> this.deleteItem(item.id)
                }
                > {
                    item.value
                }
                </ListGroup.Item>)
            }
            )
        }
        </ListGroup></div> </Col></div> </Row> </div> <div style= {
            {
                color: 'white', fontSize: '20px', fontFamily: 'Dancing Script',
            }
        }
        >NOTE:To delete any task double click on it!</div></div><footer> <p>Creator: Riya Shree<p> Email:<a href="mailto:rajeshwarsingh352@gmail.com">rajeshwarsingh352@gmail.com </a></p></p></footer> </Container>);
    }
}

export default App;