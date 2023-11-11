import Button from "@/components/Button";
import Header from "@/components/Header";
import {signIn, signOut, useSession} from "next-auth/react";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import axios from "axios";
import Spinner from "@/components/Spinner";


const StyleAcoount = styled.div`
    background-color: #f5f5f5;
`
const Wrapper = styled.div`
    padding: 30px;
    /* padding-bottom: 400px; */
`;
const ColsWrapper = styled.div`
    display: flex;
    flex: 60%;
    align-items: flex-start;
    margin-top: 40px;
    padding: 60px;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 40px; 
        gap: 20px; 
    }
`;
const WishWrapper = styled.div`
    flex: 80%;
    padding-right: 200px;
`;
const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`


export default function AccountPage() {
    const {data:session} = useSession();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [loaded, setLoaded] = useState(false);

    async function logout() {
    await signOut({
        callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
    }

    async function login() {
        await signIn('google');
    }

    function saveAddress() {
        const data = {name, email, city, postalCode, streetAddress, state, country};
        axios.put('/api/address', data);
    }
    useEffect(() => {
            axios.get('/api/address').then(response => {
                setName(response.data.name);
                setEmail(response.data.email);
                setCity(response.data.city);
                setPostalCode(response.data.postalCode);
                setStreetAddress(response.data.streetAddress);
                setState(response.data.state);
                setCountry(response.data.country);
                setLoaded(true);
        });
    }, [])
    return (
        <StyleAcoount>
            <Header />
            <Wrapper>
                <ColsWrapper>
                    <WishWrapper>
                        <WhiteBox>
                            <h2>Wishlist</h2>
                        </WhiteBox>
                    </WishWrapper>
                    <div>
                        <WhiteBox>
                            <h2>Account Details</h2>
                            {!loaded &&(
                                <Spinner fullWidth={true}/>
                            )}
                            {loaded && (
                                <>
                                    <Input type="text" 
                                    placeholder="Name" 
                                    value={name} 
                                    name="name"
                                    onChange={ev => setName(ev.target.value)} 
                                    />
                                <Input type="text" 
                                        placeholder="Email" 
                                        value={email} 
                                        name="email"
                                        onChange={ev => setEmail(ev.target.value)} 
                                        />
                                <CityHolder>
                                    <Input type="text" 
                                            placeholder="City" 
                                            value={city} 
                                            name="city"
                                            onChange={ev => setCity(ev.target.value)} 
                                            />
                                    <Input type="text" 
                                            placeholder="Postal code" 
                                            value={postalCode}
                                            name="postalCode" 
                                            onChange = {ev => setPostalCode(ev.target.value)} 
                                            />
                                </CityHolder>
                                <Input type="text" 
                                        placeholder="street address" 
                                        value={streetAddress} 
                                        name="streetAddress"
                                        onChange = {ev => setStreetAddress(ev.target.value)} 
                                        />
                                    <CityHolder>
                                        <Input type="text" 
                                        placeholder="State" 
                                        value={state} 
                                        name="state"
                                        onChange={ev => setState(ev.target.value)} 
                                        />
                                        <Input type="text" 
                                        placeholder="Country" 
                                        value={country} 
                                        name="country"
                                        onChange={ev => setCountry(ev.target.value)} 
                                        />
                                    </CityHolder>
                                
                                <Button 
                                    secondary={1} 
                                    onClick={saveAddress}>
                                    Save
                                </Button>
                                <hr />
                                </>
                            )}
                            
                            {session && (
                                <Button secondary={1} onClick={logout}>Logout</Button>
                            )}
                            {!session && (
                                <Button secondary={1} onClick={login}>Login</Button>
                            )}
                        </WhiteBox>
                    </div>
                </ColsWrapper>
            </Wrapper>
        </StyleAcoount>
    );
}