import React,{Component} from 'react'
import { Carousel,Button } from 'react-bootstrap'

class Carousels extends Component {
    render(){
        return(
            <div style={{margin:"100px 50px"}}>
                <Carousel style={{borderRadius:"125px"}}>
                    <Carousel.Item>
                        <img src="demo3.jpg" alt='First slide' style={{height:"800px",width:"100%"}}  />
                        <Carousel.Caption>
                        <h1>VentOxy-Survive</h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="demo4.jpg" alt='iii' style={{height:"800px",width:"100%"}}/>
                        <Carousel.Caption>
                        <h1>VentOxy-Rescue</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="demo1.jpg" alt='iii' style={{height:"800px",width:"100%"}}/>
                        <Carousel.Caption>
                        <h1>VentOxy-FirstAid</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}



export default Carousels