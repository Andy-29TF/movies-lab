import React from 'react';
// redux
import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/actions/theme';
//* import the stylized  component
import { ToggleContainer } from './toggleThemeBtn.styles';

function ToggleThemeBtn(props) {
    const { theme, toggleTheme } = props;

    return (
        <ToggleContainer theTypeOfTheCurrentTheme={theme} onClick={ () => toggleTheme()}>
            <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
            <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/>
        </ToggleContainer>
    )
}

function mapStateToProps(state) {
    return {
        theme: state.theme.themeType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: () => dispatch(toggleTheme())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleThemeBtn);
