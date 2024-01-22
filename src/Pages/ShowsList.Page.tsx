import { FC } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { showsQueryChangeAction } from "../actions/Shows";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../store";
import {
  showLoadingSelector,
  showsQuerySelector,
  showsSelector,
} from "../selectors/Shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import { searchShows } from "../api";

type ShowListPageProps = {} & ReduxProps;

const ShowListPage: FC<ShowListPageProps> = ({
  shows,
  query,
  queryChange,
  loading,
}) => {
 
  return (
    <div className="mt-2">
      <div className="flex items-center">
        <SearchBar
          value={query}
          onChange={(e) => queryChange(e.target.value)}
        />
        {loading && <LoadingSpinner className="ml-4 text-2xl" />}
      </div>
      <div className="flex flex-wrap justify-center">
        {shows && shows.map((s) => <ShowCard key={s.id} show={s} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    shows: showsSelector(state),
    query: showsQuerySelector(state),
    loading: showLoadingSelector(state),
  };
};
const mapDisparchToProps = {
  queryChange: showsQueryChangeAction,
};

const connetor = connect(mapStateToProps, mapDisparchToProps);
type ReduxProps = ConnectedProps<typeof connetor>;

export default connetor(ShowListPage);
