import PropTypes from 'prop-types';

const Message = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string,
};

export default Message;
