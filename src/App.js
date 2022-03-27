import "./styles.css";

export default function App() {
  let counter = 0;
  const getData = () => {
    console.log("counter-call", counter++);
  };

  const better = (fun, delay) => {
    let timer = 0;

    return function () {
      // let context = this,
      //   args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fun();
        // fun(context, args);
        // func.apply(context, args);
      }, delay);
    };
  };

  const throttle = (fun, delay) => {
    let flag = true;
    return function () {
      // let context = this;
      // let args = arguments;
      if (flag) {
        // func.apply(context, args);
        fun();
        flag = false;
        setTimeout(() => {
          flag = true;
        }, delay);
      }
    };
  };

  const callMeDebounce = better(getData, 1000);
  const callMeThrottle = throttle(getData, 1000);

  return (
    <div className="App">
      <div className="app_input">
        <input
          type="text"
          placeholder="Type here..."
          onChange={callMeDebounce}
        />
        {/* <input type="text" onChange={callMeThrottle} /> */}
           <button className="btn">Button</button>
      </div>
    </div>
  );
}
