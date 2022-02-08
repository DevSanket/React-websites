import PropTypes from 'prop-types';

function Header({bgColor,textColor,text}) {
  const headerStyles = {
    backgroundColor:bgColor,
    color: textColor
  }

  return (
      <header style={headerStyles}>
          <div className="container">
              <h2>{text}</h2>
          </div>
    </header>
  )
}

Header.defaultProps = {
  text : 'Feedback UI',
  textColor:'#ff6a95',
  bgColor:'rgba(0,0,0,0.4)',

}

Header.propTypes = {
  text : PropTypes.string,
  bgColor:PropTypes.string,
  textColor: PropTypes.string,
}


export default Header;
