const ShowMessages = ({ msg, msgColor }) => {
  if (msg === null) {
    return null;
  }
  const color = {
    color: msgColor,
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };
  return (
    <div className="msg" style={color}>
      {msg}
    </div>
  );
};

export default ShowMessages;
