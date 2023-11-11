import styled from "styled-components"
import ImgSlider from "./ImgSlider"

const ImgsDiv = styled.div`
    display: flex;
    justify-content: center;
`

const FeedbackStyle = styled.div`
    width: 200px;
    height: 180px;
    margin-right: 20px;
    padding: 40px;
    color: white;
    box-shadow: 0 8px 32px rgba(0,0,0,.28);
    border-radius: 12px;

`
const FeebackImgs = [
    {url: 'FeaturedImg1.png', title:'Fimg1'},
    {url: 'FeaturedImg2.png', title:'Fimg2'},
    {url: 'FeaturedImg3.png', title:'Fimg3'},
    {url: 'FeaturedImg4.png', title:'Fimg4'},
]

export default function Feedback() {
    return (
        <ImgsDiv>
            <FeedbackStyle>
                <ImgSlider SlidesImgs = { FeebackImgs } />
            </FeedbackStyle>
        </ImgsDiv>
        
    )
}