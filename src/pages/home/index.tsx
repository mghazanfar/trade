import { Box, Button, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Appbar from "../../components/appbar";
import TradeList from "../../components/trade-item";
import TradeCard from "../../components/trade-item";

export const Home = () => {
  const [page, setPage] = useState(1);
  const [expandableData, setExpandableData] = useState([]);

  const fetchProjects = (page = 0) =>
    axios
      .get("https://data.messari.io/api/v2/assets?page=" + page)
      .then((res) => {
        return res.data.data;
      });

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["projects", page], () => fetchProjects(page), {
      keepPreviousData: true,
    });

  useEffect(() => {
    if (data) {
      setExpandableData(expandableData.concat(data));
      debugger
    }
  }, [data]);

  return (
    <div>
      <Appbar>
        {error && "An error has occurred: " + (error as Error).message}
        {expandableData && (expandableData as any).length > 0 && (
          <TradeList expandableData={expandableData} />
        )}
        <Box my={3}>
          {isLoading || isFetching ? (
            <Box display={"flex"} justifyContent={"center"} mb={2}>
              <CircularProgress color="primary" />
            </Box>
          ) : null}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(page + 1)}
            disabled={isLoading || isFetching}
            fullWidth
          >
            Fetch more
          </Button>
        </Box>
      </Appbar>
    </div>
  );
};
