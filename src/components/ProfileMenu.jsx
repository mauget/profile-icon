import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import profileMap from "../constants/userProfiles";

const StyledRelativeContainer = styled.div.attrs((props) => ({ 'data-qa': props.dataQa }))`
  position: relative;
  top: .25rem;
  left: -0rem;
`;

const StyledMenu = styled.div.attrs((props) => ({ 'data-qa': props.dataQa }))`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(${props => props.rowCount}, 1fr); 
  background: antiquewhite;
  color: dimgray;
  border-radius: .5rem;
  border: 1px solid darkcyan;
  margin: 2px;
  width: 22rem;
  padding: .25rem;
  text-align: left;
  line-height: 1.5rem;
  cursor: default;
`;

const StyledTitle = styled.div.attrs((props) => ({ 'data-qa': props.dataQa }))`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 0 .5rem 0 .5rem;
  font-size: .9rem;
  font-weight: bold;
  text-align: center;
`;

const StyledLabel = styled.div.attrs((props) => ({ 'data-qa': props.dataQa }))`
  padding: 0 .5rem 0 .5rem;
  font-weight: bold;
  font-size: .8rem;
`;
const StyledValue = styled.div.attrs((props) => ({ 'data-qa': props.dataQa }))`
  padding: 0 .5rem 0 .5rem;
  font-weight: normal;
  font-size: .8rem;
`;
const StyledButton = styled.div.attrs((props) => ({ 'data-qa': props.dataQa }))`
  padding: 0 .5rem 0 .5rem;
  color: mediumblue;
  background: antiquewhite;
  text-align: left;
  font-weight: normal;
  font-size: .8rem;
  cursor: pointer;
`;

function ProfileMenu({show, userProfile, setInSession, dataQa }) {
    const handleSignOut = () => {
        setInSession(false);
    };

    let key = 1;
    return (
        <StyledRelativeContainer hidden={!show} dataQa={`${dataQa}.StyledRelativeContainer`}>
            <StyledMenu rowCount={profileMap.length + 2} dataQa={`${dataQa}.StyledRelativeContainer.StyledMenu`}>
                <StyledTitle dataQa={`${dataQa}.StyledRelativeContainer.StyledMenu.StyledTitle`}>User Profile</StyledTitle>
                {
                    profileMap.map((item)=> (
                        <Fragment key={key++}>
                            <StyledLabel>{item[0]}</StyledLabel>
                            <StyledValue>{item[1](userProfile)}</StyledValue>
                        </Fragment>
                    ))
                }
                <div></div><StyledButton onClick={handleSignOut} dataQa={`${dataQa}.StyledRelativeContainer.StyledMenu.StyledButton`}>sign out</StyledButton>
            </StyledMenu>
        </StyledRelativeContainer>
    );
}

ProfileMenu.propTypes = {
    show: PropTypes.bool.isRequired,
    userProfile: PropTypes.shape({}).isRequired,
    setInSession: PropTypes.func.isRequired,
    dataQa: PropTypes.string,
}
ProfileMenu.defaultProps = {
    dataQa: '_',
}
export default ProfileMenu;
