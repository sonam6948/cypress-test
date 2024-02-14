import pkg from 'multiple-cucumber-html-reporter';
const { report } = pkg;

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

//const data = fs.readFileSync("cypress/.run/results.json");

//var runInfos = JSON.parse(data);
//let startDate = new Date(runInfos.startedTestsAt);
//let endDate = new Date(runInfos.endedTestsAt);
//let diff = endDate.getTime() - startDate.getTime();

pkg.generate({
  jsonDir: './cypress/reports/cucumber-json/', // ** Path of .json file **
  pageTitle: 'Smart Home On Demand',
  reportPath: './cypress/reports/html-multi-report',
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Smart Home On Demand' },
      { label: 'Release', value: 'Smart Home On Demand: ' },
      /* { label: "Execution Start Time", value: startDate.toLocaleString() },
      { label: "Execution End Time", value: endDate.toLocaleString() },
      { label: "Test duration", value: millisToMinutesAndSeconds(diff) }, */
    ],
  },
});

// Edit dashboard (add HomePageButton)
/*const res = fs.readFileSync("./cypress/results/index.html", {
  encoding: "utf8",
  flag: "r",
});
let modifiedHTML = res
  .replace(
    '<p class="navbar-text" style="float: left">Dashboard</p>',
    '<a href="https://stormphstaticdata.z6.web.core.windows.net/test-reports/index.html" class="HomeIcon" style="float: left">    <i class="fas fa-home"></i></a> <p class="navbar-text" style="float: left">Dashboard</p>'
  )
  .replace(
    "</style>",
    ".HomeIcon {font-size: x-large;float: left;padding-top: 12px;cursor: pointer;}</style>"
  )
  .replace(
    '<link href="assets/css/responsive.dataTables.min.css" rel="stylesheet">',
    '<link href="assets/css/responsive.dataTables.min.css" rel="stylesheet"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">'
  );
try {
  fs.writeFileSync("./cypress/results/index.html", modifiedHTML);
} catch (e) {
  console.log(e);
} */
