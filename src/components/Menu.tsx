import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function Menu({ ...props }) {
  const { selectAnimation } = props

  return (
    <aside>
      <FormControl>
        <FormLabel id="animations"><strong>Animations</strong></FormLabel>
        <RadioGroup
          row
          aria-labelledby="animations"
          defaultValue="Standing"
          name="radio-buttons-group"
          onChange={(e) => selectAnimation(e.target.value)}
        >
          <FormControlLabel value="Standing" control={<Radio />} label="Standing" />
          <FormControlLabel value="Waving" control={<Radio />} label="Waving" />
          <FormControlLabel value="Bowing" control={<Radio />} label="Bowing" />
          <FormControlLabel value="Dancing" control={<Radio />} label="Dancing" />
          <FormControlLabel value="Stretching" control={<Radio />} label="Stretching" />
          <FormControlLabel value="Pointing" control={<Radio />} label="Pointing" />
        </RadioGroup>
      </FormControl>
    </aside>
  )
}
