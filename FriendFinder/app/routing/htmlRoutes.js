//var sents = require("./server.js");
var app = express();
const PORT = 3030; 
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = function(app) {

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get("/survey", function (req, res) {
  res.send("survey");  
});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

}