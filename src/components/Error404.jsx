import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  return (
    <div>
      <h1><a href="https://www.urbandictionary.com/define.php?term=Uh%20oh">Uh Oh...</a></h1>
      <h2>The page "{props.location.pathname}" you are looking for...  <br /> DOESN'T EXIST?! NOOOOOOOOO!!!!!!!</h2>
      <h3>Would you like to return to <Link to="/">home</Link> instead perhaps?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
