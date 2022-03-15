import PropTypes from 'prop-types';

const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        /* if props.alert is true, "&&" will execute next statement, else it'll skip */
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    );
}
export default Alert;

// setting datatype of props
Alert.propTypes = {
    type: PropTypes.string,
    msg: PropTypes.string
}