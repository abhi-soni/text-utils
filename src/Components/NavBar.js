import PropTypes from 'prop-types';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  style={{ background: "linear-gradient(90deg,#6f86d6 100%,#48c6ef 0%)" }}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;

// setting datatype of props
NavBar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

// setting default value to props
NavBar.defaultProps = {
    title: "Default Title",
    aboutText: "Default About Text"
}