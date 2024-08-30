// Example of sending a POST request to a PHP script using fetch
fetch('your-script.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // or 'application/json'
    },
    body: 'key1=value1&key2=value2' // Data you want to send to the PHP script
})
.then(response => response.text()) // or response.json() if expecting JSON
.then(data => console.log(data)) // Process the response from PHP
.catch(error => console.error('Error:', error));
