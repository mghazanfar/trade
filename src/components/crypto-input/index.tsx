import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import CryptoAssets from "../assets";
import { useState } from "react";


export default function CryptoInput(props: any) {
  const [value, setValue] = useState<any>(0)
  const {swap, calculatedValue, cryptoRate, setCalculatedValue, onItemChange} = props;
  
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CryptoAssets onItemChange={(val:any) => {onItemChange(val);
            setCalculatedValue((value as any)*val)}} />
          </InputAdornment>
        ),
      }}
      fullWidth
      variant="outlined"
      autoFocus
      value={swap ? (calculatedValue / cryptoRate) : value}
      onChange={e=>{setValue(swap ? (e.target.value as any)* cryptoRate : e.target.value); !swap && setCalculatedValue((e.target.value as any)*cryptoRate)}}
    />
  );
}
