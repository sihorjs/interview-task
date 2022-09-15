import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NativeSelect from '@mui/material/NativeSelect';

const ChooseCountry = ({ isOpen, onClose, options }) => {
  return (
    <Dialog fullScreen open={isOpen} onClose={onClose}>
      <DialogTitle>Select a country</DialogTitle>
      <DialogContent>
        <NativeSelect>
          {options.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </NativeSelect>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

ChooseCountry.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ChooseCountry;
