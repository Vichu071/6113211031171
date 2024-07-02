const url = 'http://20.244.56.144/test/auth';
const data = {
  "companyName": "goMart",
  "clientID": "37bb493c-73d3-47ea-8675-21f66ef9b735",
  "clientSecret": "HVIQBVbqmTGEmaED",
  "ownerName": "Rahul",
  "ownerEmail": "rahul@abc.edu", 
  "rollNo": "1",
  "accessCode": "XmPwdN"
};
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEwODM1MjY4LCJpYXQi0jE3MTA4MzQ1NjgsImlzcyI6IkFmZm9yZG11ZCIsImp@aSI6IjM3YmI4OTNjLTczZDMtNDd1YS04Njc1LTIxZjY2ZWY5YjczNSIsInN1YiI6InJhaHVsQGFiYy51ZHUifSwiY29tcGFueU5hbWUiOiJnb@1hcnQiLCJjbGllbnRJRCI6IjM3YmI0OTNjLTczZDMtNDd1YS04Njc1LTIxZjY2ZWY5YjczNSIsImNsaWVudFN1Y3J1dCI6IkhWSVFCVmJxbVRHRW1hRUQiLCJvd251ck5hbWUiOiJsYWh1bCIsIm93bmVyRW1haWwiOiJyYWh1bEBhYmMuZWR1Iiwicm9sbE5vIjoiMS39.gmk2F73GZ7q7EaIGDShc4oDKK1zWQ9Up3xQ-4Dbsu8A'
  },
  body: JSON.stringify(data)
};

fetch(url, options)
  .then(response => {
    if (response.ok) {
      console.log(`Server responded with 202 status code: ${response.status}`);
    } else {
      console.error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(response => console.log(response))
  .catch(error => console.error('Error:', error));
