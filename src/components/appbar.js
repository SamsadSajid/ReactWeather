import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import style_appbar from '../../style/appbar_style'



function SearchAppBar(props){
    const { classes, placeholder, writeInput, onFormSubmit } = props;


    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        My Weather
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={onFormSubmit}>
                            <InputBase
                                placeholder= {placeholder}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                type='search'
                                onChange={writeInput}
                            />
                        </form>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    writeInput: PropTypes.func,
};

export default withStyles(style_appbar)(SearchAppBar);