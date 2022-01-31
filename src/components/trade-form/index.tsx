import { Box, Button, InputAdornment, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import CryptoInput from "../crypto-input";

export const TradeForm = () => {
  const [value, setValue] = useState(0);
  const [calculatedValue, setCalculatedValue] = useState(0);
  return (
    <Box width={"50%"}>
      <Paper>
        <Box p={4}>
          <CryptoInput
            onItemChange={(currencyValue: any) => {setValue(currencyValue); }}
            cryptoRate={value}
            setCalculatedValue={setCalculatedValue}
          />
          <Box m={1} width={'100%'}>
            <TextField
              variant="outlined"
              value={calculatedValue}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">USD rate:</InputAdornment>
                ),
              }}
            />
            <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>Swap</Button></Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
