/**
 * Created by ashutoshj on 9/10/2015.
 */

let React = require('react/addons');
let Bootstrap = require('react-bootstrap');
let assign = require('object-assign');

var errMsg = {
    required: 'This field cannot be empty.',
    email: 'Invalid email'
};

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: '',
            val: props.value
        };
        const defaultVal = {
            isRequired: false,
            numbersOnly: false,
            isMail: false,
            type: 'text'
        };
        this.props = assign({}, defaultVal, this.props);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        if( this.props.maxLength ) {
            this.props.maxLength = parseInt(this.props.maxLength);
        } else {
            this.props.maxLength = -1;
        }
    }
    _getInput() {
        return React.findDOMNode(this.refs.input);
    }
    _getForm() {
        return React.findDOMNode(this.refs.form);
    }
    /*Showing Required Validations*/
    _checkRequiredValidation(value) {
        if( value.trim() == '' ) {
            this._formHasError('required');
            return false;
        }
        return true;
    }
    _checkEmail(value){
        /* Email type format true=john@sam.com False=as.com as@com */

        var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if( !pattern.test(value) ) {
            this._formHasError('email');
            return false;
        }
        return true;
    }
    _isNumber(charCode) {
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    _addEvents() {
        let ip = this._getInput();
        ip.addEventListener('blur', this.handleBlur);
        ip.addEventListener('focus', this.handleFocus);
        if( this.props.numbersOnly ) {
            ip.addEventListener('keypress', this.validateForNumber.bind(this));
        }

    }
    _removeEvents() {
        let ip = this._getInput();
        ip.removeEventListener('blur', this.handleBlur);
        ip.removeEventListener('focus', this.handleFocus);
        if( this.props.numbersOnly ) {
            ip.removeEventListener('keypress', this.validateForNumber.bind(this));
        }
    }
    /*Showing Error Messages*/
    _formHasError(type) {
        this._getForm().classList.add('has-error');
        console.log('formerror');
        this.setState({
            error: true,
            errorMessage: errMsg[type]
        });
    }
    componentDidMount() {
        /* Adding Dynamic Event's */
        this._addEvents();
        let input = this._getInput();

        /* Adding Dynamic Attributes */
        if( this.props.placeholder ) {
            input.setAttribute("placeholder",this.props.placeholder);
        }
        if(this.props.maxLength)
        {
            input.setAttribute("maxLength", this.props.maxLength);
        }
        if(this.props.type)
        {
            input.setAttribute("type",this.props.type);
        }

    }
    componentWillReceiveProps(nextProps) {
        if( nextProps.value != this.state.value )
        {
            console.log('updated');
            this.setState({
                val: nextProps.value
            });
        }
    }
    validateForNumber(evt) {

        evt.preventDefault();
        let preVal = this.state.val;

        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
        if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
            return false;


     //   var charCode = (evt.which) ? evt.which : evt.keyCode;
/*      if( this._isNumber(charCode) ) {
            let value = this._getInput().value;
            let currLength = value.length + 1;
            let maxLength = this.props.maxLength;
            if( maxLength != -1 && currLength <= maxLength ) {
                this.setState({
                    val: this._getInput().value + String.fromCharCode(charCode)
                });
            }
        } else {
            console.log('preval');
            this.setState({
                val: preVal
            });
        }*/
    }
    componentWillUnmount() {
        this._removeEvents();
    }
    validate() {
        let value = this._getInput().value;

        if( this.props.isRequired ) {
            if( !this._checkRequiredValidation(value) )
            {
                return;
            }
        }

       if( this.props.type == 'email' ) {
            console.log(this._checkEmail(value));
        }
    }
    resetComponent() {
        if( this.state.error ) {
            this._getForm().classList.remove('has-error');
            console.log('reset');
            this.setState({
                error: false,
                errorMessage: ''
            });
        }
    }
    handleFocus() {
        this.resetComponent();
    }
    handleBlur() {
        this.validate();
    }
    handleChange(event) {
        var val = event.target.value;
        this.setState({val: val});
        this.props.fieldUpdated && this.props.fieldUpdated(val);
    }
    render() {
        return (
            <div ref='form' className='form-group'>
                <div className='input-group'>
                    <input className='form-control'
                           ref='input'
                           bsSize="small"
                           value={this.state.val}
                           onChange={this.handleChange.bind(this)}
                     />
                </div>
                <span ref='errorMessage' className='text-danger'>
                    <small>{this.state.errorMessage}</small>
                </span>
            </div>
        );
    }
}
FormInput.propTypes = {
    isRequired: React.PropTypes.bool,
    type: React.PropTypes.oneOf(['text', 'email', 'password', 'number']),
    numbersOnly: React.PropTypes.bool,
    value: React.PropTypes.string,
    fieldUpdated: React.PropTypes.func,
    addonBefore: React.PropTypes.element
};

export default FormInput;
