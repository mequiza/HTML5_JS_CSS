//XMLHttpRequest

var request = new XMLHttpRequest();

var url = "http://contoso.com/resources/...";
request.open("GET", url);

//handling errors
function tryMyLuck() {
    var request = new XMLHttpRequest();
    request.open("GET", "/luckydip/enter");
    request.send();
    //...
    // wait for the request status to be returned
    //...
    if (request.status != 200) {
        alert("Error " + request.status + " - " + request.statusText);
    }
    //...
}

//consuming a response
function getResponse(request) {
    var type = request.getResponseHeader("Content-Type");
    switch (type) {
        case "text/xml":
            return request.responseXML;
        default:
            return request.responseText;
    }
}

//json
//{
//    "surname": "Bach",
//    "role": "composer",
//    "firstNames": [
//    "Johann", "Sebastian"
//    ]
//}

function getResponse(request) {
    var type = request.getResponseHeader();
    switch (type) {
        case "text/xml":
            return request.responseXML;
        case "application/json":
            return JSON.parse(request.responseText);
        default:
            return request.responseText;
    }
}

//asynchronous response
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        var response = JSON.parse(request.responseText);
        //...
    }
};

//sending data
request.open("POST", url);
request.send(body);

request.setRequestHeader("Content-Type", "application/json");

request.setRequestHeader("Content-Type",
    "application/x-www-form-urlencoded");
