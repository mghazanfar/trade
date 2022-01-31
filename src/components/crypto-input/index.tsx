import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import CryptoAssets from "../assets";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export default function CryptoInput(props: any) {
  const classes = useStyles();
  const [value, setValue] = useState<any>(0)

  return (
    <TextField
      className={classes.margin}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CryptoAssets onItemChange={(val:any) => {props.onItemChange(val);
            props.setCalculatedValue((value as any)*val)}} />
          </InputAdornment>
        ),
      }}
      fullWidth
      variant="outlined"
      autoFocus
      value={value}
      onChange={e=>{setValue(e.target.value); props.setCalculatedValue((e.target.value as any)*props.cryptoRate)}}
    />
  );
}
