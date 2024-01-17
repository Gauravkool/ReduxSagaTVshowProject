import { FC, useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { searchShows } from "../api";
import { Show } from "../model/Show";
import { showsLoadedAction, showsQueryChangeAction } from "../actions/Shows";
import { connect } from "react-redux";
import { State } from "../store";
import { showsQuerySelector, showsSelector } from "../selectors/Shows";

type ShowListPageProps = {
  shows: Show[];
  query: string;
  queryChange: (query: string) => void;
};

const ShowListPage: FC<ShowListPageProps> = ({
  shows,
  query,
  queryChange,
}) => {
  return (
    <div className="mt-2">
      <SearchBar
        value={query}
        onChange={(e) => queryChange(e.target.value)}
      />
      <div className="flex flex-wrap justify-center">
        {shows.map((s) => (
          <ShowCard key={s.id} show={s} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    shows: showsSelector(state),
    query: showsQuerySelector(state),
  };
};
const mapDisparchToProps = {
  queryChange: showsQueryChangeAction,
};

export default connect(mapStateToProps, mapDisparchToProps)(ShowListPage);
