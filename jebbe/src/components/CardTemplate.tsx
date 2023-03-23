import React from "react";

const CardTemplate = () => {
  function getValues(spreadsheetId, range, callback) {
    try {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: spreadsheetId,
          range: range,
        })
        .then((response) => {
          const result = response.result;
          const numRows = result.values ? result.values.length : 0;
          console.log(`${numRows} rows retrieved.`);
          if (callback) callback(response);
        });
    } catch (err) {
      console.log(err.message);
      return;
    }
  }
  return (
    <div>
      <button
        onClick={getValues("1XA2Vs033WWUXjlSufxJKaYb0e84_RbDMcUxBVuhwPf0")}
      >
        get
      </button>
    </div>
  );
};

export default CardTemplate;
