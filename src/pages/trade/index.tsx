import { Box } from "@material-ui/core";
import Appbar from "../../components/appbar";
import { TradeForm } from "../../components/trade-form";
import { UserConsumer } from "../../store/user.context";

export const Trade = () => {
  return (
    <UserConsumer>
      {({user}) => {
        let isLoggedIn = user && user.name;
        debugger
        return (
          <Appbar>
            <Box display={"flex"} justifyContent={"center"}>
              {isLoggedIn ? (
                <TradeForm />
              ) : (
                <h1>
                  In order to use our currency exchange feature, you need to
                  login first
                </h1>
              )}{" "}
            </Box>
          </Appbar>
        );
      }}
    </UserConsumer>
  );
};
