import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../redux/actions";
import Input from "../components/Input";

const SearchLogs = () => {
  const dispatch = useDispatch();
  const { searchedUser, foundLogs } = useSelector((state) => state.userLog);
  const [searchingCompleted, setSearchingCompleted] = useState(false);

  const handleSearchLogs = async () => {
    if (searchedUser) {
      try {
        const response = await fetch(
          `http://localhost:8080/log/${searchedUser}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        dispatch(allActions.userLog.setFoundLogs(data));
        setSearchingCompleted(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const mappedLogs = foundLogs.map((log) => (
    <span className="font-mono">{log}</span>
  ));

  return (
    <div className="flex flex-col pt-20">
      <div className="space-y-6 mx-auto">
        <div className="flex space-x-2">
          <div className="w-96">
            <Input
              label="Search for user"
              type="text"
              onChange={(e) =>
                dispatch(allActions.userLog.setSearchedUser(e.target.value))
              }
            />
          </div>
          <button onClick={handleSearchLogs}>
            <img
              src="/assets/icons/search.svg"
              alt="Search Icon"
              className="pt-6"
            />
          </button>
        </div>
        <div className="flex flex-col pl-1">
          {searchingCompleted && foundLogs.length > 0
            ? mappedLogs
            : searchingCompleted
            ? "No matches found for searched user"
            : ""}
        </div>
      </div>
    </div>
  );
};

export default SearchLogs;
