import React, { Component } from 'react';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Casino from 'material-ui-icons/Casino';
import FitnessCenter from 'material-ui-icons/FitnessCenter';
import Straighten from 'material-ui-icons/Straighten';
import "./style.css";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';

const styles = theme => ({
  formContainerRightTop: {
    height: 275,
    width: 450
  }
})

class ProfilePicture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rangeValue: [20, 40]
    };
  }

  onSliderChange = (rangeValue) => {
    console.log(rangeValue);
    this.setState({
      rangeValue,
    });
  }

  render() {

    const { translate, classes } = this.props;

    return (
     <Paper elevation={4} className={classes.formContainerRightTop}>
          
        
         
         

         
         
         
         

         
          
        
        
        <table>
  <tr>
    <Typography variant="title">
            {translate('profile-page.match-details')}
          </Typography>
  </tr>
  <tr>
    <td><Straighten class="material-icons-straighten"/></td>
    <td>5'10"
    <div/>
    Height
    <div/>
    </td>
    <td><FitnessCenter class="material-icons-straighten"/></td>
    <td>150lbs.
    <div/>
    Weight
    <div/>
    </td>
  </tr>
  <tr>
    <td><Casino class="material-icons-straighten"/></td>
    <td>Betting Amount
    <div/>
    <Range step={5} allowCross={false} value={this.state.rangeValue} onChange={this.onSliderChange} />
    <div/>
    {this.state.rangeValue[0]}
        -${this.state.rangeValue[1]}
    </td>
  </tr>
</table>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    translate: getTranslate(state.get('locale')),
    currentLangugage: getActiveLanguage(state.get('locale')).code
  };
};

export default withRouter(connect(
  mapStateToProps
)(withStyles(styles)(ProfilePicture)));
