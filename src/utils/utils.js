const limitText = (string, num) => {
    if (string.length >= num) {
      return string.substring(0, num);
    } else {
      return string;
    }
  };

  export default limitText