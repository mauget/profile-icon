import './App.css';
import ProfileIcon from "./components/ProfileIcon";
import { useState } from "react";
import styled from 'styled-components';
import {userProfileBS, userProfileLM, userProfileMF} from "./constants/userProfiles";

const SignInButton = styled.button`
  font-size: 1.0rem;
  background: dimgray;
  color: antiquewhite;
  border-radius: .4rem;
  margin: 0 .5rem 0 .5rem;
  padding: .5rem;
`;

const StyledButtonbar = styled.div`
    display: flex;
`;

function App() {
    const [inSession, setInSession] = useState(false);
    const [currentProfile, setCurrentProfile] = useState({})

    // Simulate distinct user authentication profiles
    const signInBS = () => {
        setCurrentProfile(userProfileBS);
        setInSession(true);
    }
    const signInMF = () => {
        setCurrentProfile(userProfileMF);
        setInSession(true);
    }
    const signInLM = () => {
        setCurrentProfile(userProfileLM);
        setInSession(true);
    }

    return (
        <div className="App">
            <header className="App-header">
                {
                    inSession ? (
                        <>
                            <p>Some content.</p>
                            <ProfileIcon userProfile={currentProfile} setInSession={setInSession}/>
                            <p>More content.</p>
                        </>
                    ) : (
                        <>
                            <p data-qa="App.signed-out">Signed out</p>
                            <StyledButtonbar>
                                <SignInButton onClick={signInBS}>Sign in Smith</SignInButton>
                                <SignInButton onClick={signInMF}>Sign in Farmer</SignInButton>
                                <SignInButton onClick={signInLM}>Sign in Mauget</SignInButton>
                            </StyledButtonbar>
                        </>
                    )
                }
            </header>

        </div>
    );
}

export default App;
