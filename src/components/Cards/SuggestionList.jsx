import React from "react";
import SuggetionCard from "./SuggetionCard";

const SuggestionList = ({ infos }) => {
  return infos.map((info) => <SuggetionCard infos={info} />);
};

export default SuggestionList;
