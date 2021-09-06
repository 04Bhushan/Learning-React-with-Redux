import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [Translated, setTranslated] = useState("");
  const [DebouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
      const TimerId = setTimeout(()=>{
        setDebouncedText(text);
      }, 500);

      //if text is further updated then we have to cancel that timer using Cleanup function
      return () => {
          clearTimeout(TimerId);
      }
  }, [text])

  useEffect(() => {

    //making request using helper function

    const DoTranslation = async () => {

        const {data} = await axios.post(
            "https://translation.googleapis.com/language/translate/v2",
            {},
            {
              params: {
                q: DebouncedText,//updated text from 1st useEffect function
                target: language.value,
                key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
              },
            }
          );
          setTranslated(data.data.translations[0].translatedText);
    };
    
    //this function is invoked whenver it renders 1st time or if language/DebouncedText changes
    DoTranslation();
    // console.log("New Language or Text");
  }, [language, DebouncedText]);
  return (
      <div> 
          <h1 className="ui header">{Translated}</h1>
      </div>
  );
};

export default Convert;
