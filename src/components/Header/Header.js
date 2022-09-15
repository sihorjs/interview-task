import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import routes from 'constants/routes';

const Header = ({ className }) => (
  <AppBar position="static" className={className}>
    <Toolbar>
      <MenuItem component={Link} to={routes.COUNTRIES}>Countries</MenuItem>
      <MenuItem component={Link} to={routes.DUMMY_PAGE}>Other page</MenuItem>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: null,
};

export default Header;
