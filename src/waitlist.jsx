const Waitlist= ({ width = 480, height = 320 }) => {
    return (
      <iframe
        src="https://vividlyads.substack.com/embed"
        width={width}
        height={height}
        style={{ border: "1px solid #EEE", background: "white" }}
        frameBorder="0"
        scrolling="no"
      />
    );
  };
  
  export default Waitlist;