/**
 * Created by synerzip on 20/08/15.
 */
'use strict';
var React = require('react');

var ReactMaerial = require('material-ui');
var ThemeManager = new ReactMaerial.Styles.ThemeManager();
var UpperHeader = require('./UpperHeader');


class MainComponent extends React.Component{
    constructor(props){
        super(props);
    }
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }
    render(){
        return (
            <div className="row">
                 <div className="col-lg-6">
                    <ReactMaerial.AppBar
                        title="Home"

                        showMenuIconButton={false}
                        iconElementRight={<ReactMaerial.FlatButton label="Save" />} />
                 </div>
        <UpperHeader />

            </div>
        );
    }
}

MainComponent.childContextTypes = {
    muiTheme: React.PropTypes.object
};

module.exports = MainComponent;
