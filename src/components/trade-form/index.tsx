import { Box, Paper } from "@material-ui/core";
import CryptoInput from "../crypto-input";

export const TradeForm = () => {
  return (
    <Paper>
      <Box p={3}>
          <CryptoInput />
      </Box>
    </Paper>
  );
};
