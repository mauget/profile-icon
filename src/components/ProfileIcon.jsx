import React, {useState} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import ProfileMenu from "./ProfileMenu";
import getProfileColors from "../helpers/getProfileColors";

const basis = 3.0;
const unit = 'rem';

const StyledProfileIcon = styled.div.attrs((props) => ({ 'data-qa': props.dataQa }))`
  font-family: Arial, Helvetica, sans-serif;
  width: ${basis}${unit};
  height: ${basis}${unit};
  border-radius: 50%;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-size: ${basis / 2.0}${unit};
  font-weight: 200;
  text-align: center;
  line-height: ${basis}${unit};
  padding: ${basis / 10}rem;
  cursor: pointer;
`

function ProfileIcon({userProfile, setInSession }) {
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const { firstName, lastName } = userProfile;
    const initials = [firstName, lastName].map(name => name[0]).join('').toUpperCase();
    const colors = getProfileColors(initials);

    const clickHandler = () => {
        setHiddenMenu(!hiddenMenu);
    };
    return (
        <StyledProfileIcon dataQa='App.StyledProfileIcon' onClick={clickHandler} backgroundColor={colors[0]} textColor={colors[1]}>
            {initials}
            <ProfileMenu dataQa='App.StyledProfileIcon.ProfileMenu' show={!hiddenMenu} userProfile={userProfile} setInSession={setInSession}/>
        </StyledProfileIcon>
    );
}

ProfileIcon.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    signOut: PropTypes.func,
};
ProfileIcon.defaultProps = {
    firstName: '?none',
    lastName: '?none',
    signOut: (()=>{}),
}
export default ProfileIcon;
