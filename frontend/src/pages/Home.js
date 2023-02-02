import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../redux/actions";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const Home = () => {
  const dispatch = useDispatch();
  const { name, email, log } = useSelector((state) => state.userLog);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleSubmitLog = async () => {
    try {
      const response = await fetch("http://localhost:8080/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({ name, email, log }),
      });
      if (response.status === 400) {
        const result = await response.json();
        setResponseMessage(result);
      } else {
        setResponseMessage("New log inserted successfully");
        dispatch(allActions.userLog.clearLogsData());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-96 space-y-6 pt-20">
        <Input
          label="Name"
          type="text"
          required
          onChange={(e) => dispatch(allActions.userLog.setName(e.target.value))}
          className="pt-6"
          value={name}
        />
        <Input
          label="Email"
          type="email"
          required
          onChange={(e) =>
            dispatch(allActions.userLog.setEmail(e.target.value))
          }
        />
        <TextArea
          label="Log"
          required
          onChange={(e) => dispatch(allActions.userLog.setLog(e.target.value))}
        />
        <Button onClick={handleSubmitLog} className="w-20 mr-0 ml-auto">
          Submit
        </Button>
        {responseMessage}
      </div>
    </div>
  );
};
export default Home;
