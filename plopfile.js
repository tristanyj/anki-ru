const moment = require("moment");

module.exports = function (plop) {
  plop.setGenerator("session", {
    description: "Create a new session for the current day",
    prompts: [],
    actions: [
      {
        type: "add",
        path: `${moment().format("YY")}/${moment().format(
          "MM"
        )}/${moment().format("YYMMDD")}.txt`,
        templateFile: "templates/notes.txt",
      },
      // {
      //   type: "add",
      //   path: `${moment().format("YY")}/${moment().format(
      //     "MM"
      //   )}/source/${moment().format("YYMMDD")}.md`,
      //   templateFile: "templates/source.md",
      //   data: {
      //     date: moment().format("YYMMDD"),
      //     title: "x",
      //     url: "https://x.com",
      //   },
      // },
    ],
  });
};
