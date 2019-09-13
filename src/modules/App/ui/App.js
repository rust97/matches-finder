import React from "react";

import SearchInput from "../../SearchInput";
import MatchFound from "../../MatchFound/ui/MatchFound";
import AllMatches from "../../AllMatches";

export default function App() {
  return (
    <div className="mainContainer">
      <AllMatches />
      <SearchInput />
      <MatchFound />
    </div>
  );
}
