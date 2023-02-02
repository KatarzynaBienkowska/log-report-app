import Log from "../models/Log.js";

const emailRegex =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const handleNewLog = async (req, res) => {
  const { name, email, log } = req.body;

  if (!name || !email || !log)
    return res.status(400).json("All fields are required");

  if (!emailRegex.test(email))
    return res.status(400).json("Invalid email address");

  const processedLogs = processLog(log).join("\n");

  if (!processedLogs) return res.status(400).json("Invalid logs");

  try {
    await Log.create({ name, email, log: processedLogs });
    res.status(201).send("New log inserted successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const processLog = (log) => {
  const logLines = log.split("\n");
  const validLogLines = new Array();
  logLines.forEach((logLine) => {
    if (validateLogLine(logLine)) {
      validLogLines.push(logLine);
    }
  });
  if (validLogLines.length > 0) return validLogLines.sort(sortLogsByTimestamps);
  return validLogLines;
};

const validateLogLine = (logLine) => {
  const firstChar = logLine[0];
  switch (firstChar) {
    case "I":
      const infoRegex = /I\s([0-9])+\s([\w\[\]`!@#$%\^&*()={}:;<>+'-]*)/;
      return infoRegex.test(logLine);
    case "W":
      const warningRegex = /W\s([0-9])+\s([\w\[\]`!@#$%\^&*()={}:;<>+'-]*)/;
      return warningRegex.test(logLine);
    case "E":
      const errorRegex =
        /E\s((?:\b|-)([1-9]{1,2}[0]?|100)\b)+\s[0-9]+\s([\w\[\]`!@#$%\^&*()={}:;<>+'-]*)/;
      return errorRegex.test(logLine);
    default:
      return false;
  }
};

const sortLogsByTimestamps = (prevLog, currentLog) => {
  const numberRegex = /\d+/g;
  const prevTimestamp =
    prevLog[0] === "E"
      ? parseInt(prevLog.match(numberRegex)[1])
      : parseInt(prevLog.match(numberRegex)[0]);
  const currentTimestamp =
    currentLog[0] === "E"
      ? parseInt(currentLog.match(numberRegex)[1])
      : parseInt(currentLog.match(numberRegex)[0]);

  if (prevTimestamp > currentTimestamp) return 1;
  else if (prevTimestamp < currentTimestamp) return -1;
  else return 0;
};

const getLogsForUser = async (req, res) => {
  const { name } = req.params;
  const relevantLineRegex =
    /E\s(5[0-9]|[6-9][0-9]|100)+\s[0-9]+\s([\w\[\]`!@#$%\^&*()={}:;<>+'-]*)/;
  try {
    const data = await Log.find({ name }).exec();
    const allLogs = data.map(({ log }) => log);
    const allLogsArr = allLogs
      .map((line) => line.split("\n"))
      .flat()
      .filter((line) => relevantLineRegex.test(line))
      .sort(sortLogsByTimestamps);
    res.status(200).json(allLogsArr);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { handleNewLog, getLogsForUser };
