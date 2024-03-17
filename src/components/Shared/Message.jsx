const Message = ({ text }) => {
  return (
    <div className="grow h-32 flex items-center justify-center">
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Message;
