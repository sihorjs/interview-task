import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NativeSelect from '@mui/material/NativeSelect';

const ChooseCountry = ({
  isOpen,
  onClose,
  options,
  onSubmit,
  initialValue,
}) => {
  const [value, onChange] = useState(initialValue);

  useEffect(() => {
    onChange(initialValue);
  }, [initialValue]);

  const handleClose = () => {
    onClose();
    onChange('');
  };

  const handleSubmit = () => {
    onSubmit(value);
    onChange('');
  };

  return (
    <Dialog fullScreen open={isOpen} onClose={handleClose}>
      <DialogTitle>Select a country</DialogTitle>
      <DialogContent>
        <NativeSelect value={value} onChange={e => onChange(e.target.value)}>
          <option disabled value="">Not set</option>
          {options.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </NativeSelect>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} disabled={!value}>Select</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

ChooseCountry.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ChooseCountry;
