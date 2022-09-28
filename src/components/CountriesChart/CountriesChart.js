import { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReactSortable } from 'react-sortablejs';
import ChooseCountry from 'components/ChooseCountry';
import generateSlots from 'utils/generateSlots';
import { addButtonSx, filledSlotSx, listItemSx } from './styles';

const CountriesChart = ({ countries, limit }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots, setSlots] = useState(generateSlots(limit));
  const [availableCountries, setAvailableCountries] = useState(countries);

  const handleCloseModal = () => setSelectedSlot(null);

  const handleSelectCountry = (selectedCountry) => {
    setSlots((prevSlots) => prevSlots.map((slot) => (
      slot.id === selectedSlot.id ? { ...slot, country: selectedCountry } : slot
    )));
    setAvailableCountries((prevCountries) =>
      prevCountries.filter((country) => country !== selectedCountry),
    );

    handleCloseModal();
  };

  const handleReplaceCountry = (selectedCountry) => {
    const { id, country: countryToReplace } = selectedSlot;

    if (countryToReplace !== selectedCountry) {
      setSlots((prevSlots) => (
        prevSlots.map((slot) => (slot.id === id ? { ...slot, country: selectedCountry } : slot))
      ));
      setAvailableCountries((prevCountries) => {
        const countriesWithoutChosenOne = prevCountries.filter(country => country !== selectedCountry);
        const updatedAvailableCountries = [...countriesWithoutChosenOne, countryToReplace];

        return updatedAvailableCountries.sort();
      });
    }

    handleCloseModal();
  };

  const handleRemoveCountry = (slot) => {
    const { id, country } = slot;

    setSlots((prevSlots) => prevSlots.map((slot) => (slot.id === id ? { id } : slot)));
    setAvailableCountries((prevCountries) => {
      const updatedAvailableCountries = [...prevCountries, country];

      return updatedAvailableCountries.sort();
    });
  };

  const isCountryReplaced = selectedSlot && selectedSlot.country;

  return (
    <>
      <div>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Select your top {limit} countries
        </Typography>

        <ReactSortable component="ol" setList={setSlots} list={slots}>
          {slots.map((slot, index) => (
            <ListItem key={slot.id} sx={listItemSx}>
              {index + 1}
              {slot.country ? (
                <Typography variant="body1" sx={filledSlotSx}>
                  <span>
                    {slot.country}
                  </span>
                  <IconButton sx={{ ml: 1 }} onClick={() => setSelectedSlot(slot)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleRemoveCountry(slot)}>
                    <DeleteIcon />
                  </IconButton>
                </Typography>
              ) : (
                <IconButton onClick={() => setSelectedSlot(slot)} sx={addButtonSx}>
                  <AddIcon />
                </IconButton>
              )}
            </ListItem>
          ))}
        </ReactSortable>
      </div>

      <ChooseCountry
        isOpen={!!selectedSlot}
        initialValue={isCountryReplaced ? selectedSlot.country : ''}
        onClose={handleCloseModal}
        onSubmit={isCountryReplaced ? handleReplaceCountry : handleSelectCountry}
        options={isCountryReplaced ? [selectedSlot.country, ...availableCountries] : availableCountries}
      />
    </>
  );
};

CountriesChart.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  limit: PropTypes.number.isRequired,
};

export default CountriesChart;
