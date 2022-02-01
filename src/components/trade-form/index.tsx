import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import CryptoInput from "../crypto-input";

export const TradeForm = () => {
  const [value, setValue] = useState(0);
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [swap, setSwap] = useState(false);
  return (
    <Box width={"50%"}>
      <Paper>
        <Box p={4}>
          {swap ? (
            <TextField
              variant="outlined"
              value={calculatedValue}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">USD rate:</InputAdornment>
                ),
              }}
              onChange={(e) => {
                if(swap){
                  setCalculatedValue(e.target.value as any);
                }
              }}
            />
          ) : (
            <CryptoInput
              onItemChange={(currencyValue: any) => {
                setValue(currencyValue);
              }}
              cryptoRate={value}
              setCalculatedValue={setCalculatedValue}
              swap={swap}
              calculatedValue={calculatedValue}
            />
          )}
          <Box m={1} width={"100%"} marginLeft={0}>
            {swap ? (
              <CryptoInput
                onItemChange={(currencyValue: any) => {
                  setValue(currencyValue);
                }}
                cryptoRate={value}
                setCalculatedValue={setCalculatedValue}
                swap={swap}
                calculatedValue={calculatedValue}
              />
            ) : (
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
            )}
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setSwap(!swap)}
              >
                Swap
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
