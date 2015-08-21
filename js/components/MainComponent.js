/**
 * Created by synerzip on 20/08/15.
 */
'use strict';
var React = require('react');

var ReactMaerial = require('material-ui');
var ThemeManager = new ReactMaerial.Styles.ThemeManager();



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
        /*         <div className="col-lg-6">
                    <ReactMaerial.AppBar
                        title="Home"

                        showMenuIconButton={false}
                        iconElementRight={<ReactMaerial.FlatButton label="Save" />} />
                 </div>*/

            <Tabs>
            <Tab label="Item One" >
            <div>
            <h2>Tab One Template Example</h2>
<p>
    This is an example of a tab template!
</p>
<p>
    You can put any sort of HTML or react component in here.
</p>
</div>
</Tab>
<Tab label="Item Two" >
    <div>
    <h2 >Two Template Example</h2>
<p>
This is another example of a tab template!
</p>
<p>
Fair warning - the next tab routes to home!
</p>
</div>
</Tab>
/*<Tab
label="Item Three"
route="home"
onActive={this._onActive} />*/
</Tabs>

/*_onActive(tab){
    this.context.router.transitionTo(tab.props.route)
}*/
            </div>
        );
    }
}

MainComponent.childContextTypes = {
    muiTheme: React.PropTypes.object
};

module.exports = MainComponent;
