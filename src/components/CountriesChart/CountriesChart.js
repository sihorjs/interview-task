import { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddIcon from '@mui/icons-material/Add';
import { ReactSortable } from 'react-sortablejs';
import ChooseCountry from 'components/ChooseCountry';
import { IconButton } from '@mui/material';
import { listItemCss as listItemSx } from './styles';
import generateSlots from 'utils/generateSlots';

const CountriesChart = ({ countries, limit }) => {
  const [isOpen, setModal] = useState(false);
  const [slots, setSlots] = useState(generateSlots(limit));

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
              <IconButton onClick={() => setModal(true)}>
                <AddIcon />
              </IconButton>
              <DragIndicatorIcon />
            </ListItem>
          ))}
        </ReactSortable>
      </div>

      <ChooseCountry isOpen={isOpen} onClose={() => setModal(false)} options={countries} />
    </>
  );
};

CountriesChart.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  limit: PropTypes.number.isRequired,
};

export default CountriesChart;
