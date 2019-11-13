import classnames from "classnames";
import React, { useState, useEffect } from "react";
import search from "../../asset/search.svg";
import styles from "./style.module.css";

const Select = ({ options, value, title, onChange }) => {
  const [showing, toggleVisibility] = useState(false);
  const [internalState, setState] = useState("");
  const [auto, setAuto] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  useEffect(() => {
    setState(value);
  }, [value]);
  const handleFocus = () => {
    toggleVisibility(!showing);
  };

  const onSelect = value => {
    toggleVisibility(false);
    setState(value);
  };

  const onSubmit = () => {
    if (internalState) {
      onChange(internalState);
    }
  };

  const handleChange = e => {
    const filteredSuggestions = options.filter(
      suggestion =>
        suggestion.label
          .toLowerCase()
          .indexOf(e.currentTarget.value.toLowerCase()) > -1
    );
    setAuto(true);
    setFilteredSuggestions(filteredSuggestions);
    setState(e.currentTarget.value);
  };

  return (
    <div className={styles.select__container}>
      <div className={styles.select__valueWrapper}>
        <input
          type="text"
          value={internalState}
          onClick={handleFocus}
          onChange={e => handleChange(e)}
        />
        <span className={styles.search__title}>{title}</span>
        <button onClick={onSubmit}>
          <img src={search} alt="search" />
        </button>
      </div>
      <div
        className={classnames(styles.select__select, {
          [styles.select__visible]: showing
        })}
      >
        {!auto
          ? options.map(option => (
              <div
                className={styles.select__option}
                key={option.value}
                onClick={() => onSelect(option.label)}
              >
                {option.value}
              </div>
            ))
          : filteredSuggestions.map((filteredSuggestion, index) => (
              <div
                className={styles.select__option}
                key={index}
                onClick={() => onSelect(filteredSuggestion.label)}
              >
                {filteredSuggestion.value}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Select;
