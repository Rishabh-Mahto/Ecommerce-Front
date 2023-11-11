import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HeroBanner = styled.div`
    background-image: url("/banner4.jpg");
    background-color: #cccccc;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const LeftContent = styled.div`
    position: absolute;
    left: 10%;
    top: 30%;
    transform: translateY(-50%);
    @media only screen and (max-width: 930px) {
        top: 30%;
    }
`;

const TextContent = styled.div`
    display: flex-column;
    /* position: relative; */
    line-height: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 2px 11px;
    /* background-color: red; */
`;

const SearchBooks = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    max-width: 700px;
    overflow: hidden;
    background: transparent;
    border-radius: 40px;
    padding: 2px 5px;
`;

const SearchBar = styled.input`
    flex: 1;
    border: none;
    outline: 0;
    position: relative;
    background: transparent;
    padding: 13px 8px;
    font-size: 17px;
    color: #565656;
    box-shadow: 0 10px 25pc rgba(0, 0, 0, 0.3);
    border-radius: 40px;
    
    &:hover {
        border: 1px solid #ffffff;
        width: 400px;
    }
`;

const SearchBtn = styled(Link)`
    padding: 6px 15px;
    position: relative;
    margin-top: 8px;
    margin-right: 16px;
    background: #FF4500;
    border-radius: 50px;
    font-size: 17px;
    border: none;
    cursor: pointer;
    color: #fff;
    transform: translateX(-50%);
    right: 3vh;
    transition: 0.8s;
    
    &:hover {
        border: 1px solid #ffffff;
    }
`;

const RightContent = styled.div`
    position: absolute;
    right: 10%;
    top: 40%;
    /* transform: translateY(-50%); */
    background-color: red;
`;

const ContentImg = styled.img`
    /* width: 300px;
    height: 300px; */
`;

export default function Banner() {
    return (
        <HeroBanner>
            <Content>
                <LeftContent>
                    <TextContent>
                        <h1>Unleash Your Imagination:</h1>
                        <p>Discover, Delight, and Buy Books Online!</p>
                    </TextContent>
                    <SearchBooks>
                        <form action="">
                            <SearchBar type="text" placeholder="Search Books!" />
                            <SearchBtn href={'/search'}>
                                <FontAwesomeIcon icon={faSearch} />
                            </SearchBtn>
                        </form>
                    </SearchBooks>
                </LeftContent>
                <RightContent>
                    <ContentImg src="/.png" />
                </RightContent>
            </Content>
        </HeroBanner>
    );
}
