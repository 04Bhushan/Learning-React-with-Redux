import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "Latin",
    value: "lo",
  },
  {
    label: "Marathi",
    value: "mr",
  },
  {
    label: "Malyalam",
    value: "ml",
  },
  {
    label: "Panjabi",
    value: "pa",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Swedish",
    value: "sv",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Telgu",
    value: "te",
  },
  {
    label: "Urdu",
    value: "ur",
  },
  {
    label: "Tamil",
    value: "ta",
  },
];

const Translate = () => {
  const [Language, setLanguage] = useState(options[0]);
  const [Text, setText] = useState('');
  return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input value={Text} onChange={(e) => setText(e.target.value)}/>
            </div>
        </div>
      
      <Dropdown
        label={'Select a Language'}
        Selected={Language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <hr/>
      <h3 className="ui header">Output:</h3>
      <Convert text={Text} language={Language} /> 
    </div>
  );
};

export default Translate;
