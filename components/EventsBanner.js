import styled from "styled-components"
import ImgSlideShow from "./ImgSlideShow"


const EventWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`

const ContainerStyle = styled.div`
    width: 700px;
    height: 380px;
    box-shadow: 0 8px 32px rgba(0,0,0,.28);
    border-radius: 12px;
  
`


export default function EventsBanner() {
    const SlidesImgs = [
        {url: 'event_img1.jpg', title: 'Event1'},
        {url: 'event_img2.jpg', title: 'Event2'},
        {url: 'event_img3.jpg', title: 'Event3'},
        {url: 'event_img4.jpg', title: 'Event4'},
        {url: 'event_img5.jpg', title: 'Event5'},
        {url: 'Event_img6.jpg', title: 'Event6'},
    ];
    
    return (
        <EventWrapper>
                <ContainerStyle>
                    <ImgSlideShow SlidesImgs={ SlidesImgs }/>
                </ContainerStyle>            
        </EventWrapper>
    )
}