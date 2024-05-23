import { useEffect, useState } from "react";

const usePreference = (
  //individual or all
  _promiseType: any = "individual",
  _endpoints: [] = []
) => {
  const [isTimeoutComplete, setIsTimeoutComplete] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const timeouts: any[] = [];
    setMessage("LOADING...");
    const welcomeTime = setTimeout(() => {
      setMessage("WELCOME BACK...");
      timeouts.push(welcomeTime);
      const setThemeTime = setTimeout(() => {
        setMessage("INSTALL THEME...");
        timeouts.push(setThemeTime);
        const setLanguageTime = setTimeout(() => {
          setMessage("INSTALL LANGUAGE...");
          timeouts.push(setLanguageTime);
          const sayHi = setTimeout(() => {
            setMessage("🤝HI...");
            timeouts.push(sayHi);
            const goOn = setTimeout(() => {
              setMessage("");
              setIsTimeoutComplete(true);
              timeouts.push(goOn);
            }, 0);
          }, 0);
        }, 0);
      }, 0);
    }, 0);

    return () => timeouts.forEach((timeout: any) => clearTimeout(timeout)); // Cleanup the timeout on component unmount
  }, []);

  return { isTimeoutComplete, message };
};

export default usePreference;
