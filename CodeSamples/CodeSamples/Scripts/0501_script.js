//$.get(url, body, callback);

var response;
$.get('http://contoso.com/resources/...', function (data) {
    response = data;
});

//handling errors
var response;
$.get('http://contoso.com/resources/...', function (data) {
    response = data;
}).error(function () {
    alert("error occurred during get operation");
});

//$.getJSON(url, body, callback);

$('#container').load(url, body, callback);

//all in one
$.ajax({
    url: '/luckydip/enter',
    type: 'GET',
    timeout: 12000,
    dataType: 'text'
}).done(function (responseText) {
    $('#answer').text(responseText);
}).fail(function () {
    alert('An error has occurred - you may not have been entered');
});

//serializing forms
$.ajax({
    url: '/luckydip/enterWithName',
    type: 'POST',
    timeout: 12000,
    dataType: 'text',
    data: {
        firstName: myForm.fname.value,
        lastName: myForm.lname.value
    }
}).done(function (responseText) {
        $('#answer').text(responseText);
    }).fail(function () {
        alert('An error has occurred - you may not have been entered');
    });

$.ajax({
    url: '/luckydip/enterWithName',
    type: 'POST',
    timeout: 12000,
    dataType: 'text',
    data: ('#myForm').serializeArray()
}).done(function (responseText) {
    $('#answer').text(responseText);
}).fail(function () {
    alert('An error has occurred - you may not have been entered');
});

