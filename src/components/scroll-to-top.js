    /*
     ===========================
     @@@ Scroll to top button which is a floating button from Material UI
     ===========================
     */

    import React from 'react';
    import PropTypes from 'prop-types';
    import { withStyles } from '@material-ui/core/styles';
    import Button from '@material-ui/core/Button';
    import NavigationIcon from '@material-ui/icons/Navigation';
    import style_scroll_to_top from '../../style/scroll-to-top'



    function FloatingActionButtons(props) {
        const { classes } = props;
        return (
            <div>
                <Button variant="extendedFab" color="secondary" aria-label="Delete" className={classes.button}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Back to top
                </Button>
            </div>
        );
    }

    FloatingActionButtons.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    export default withStyles(style_scroll_to_top)(FloatingActionButtons);
