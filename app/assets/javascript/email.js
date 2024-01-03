// sendEmailBtn event listener to send the email, check the status, update the status button color,
//  and reset the status button color after 5 minutes:

document.addEventListener('DOMContentLoaded', () => {
  const emailForm = document.getElementById('emailForm');
  const statusBtn = document.getElementById('statusBtn');

  emailForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    console.log('Send Email button clicked'); // Add console log

    // Prepare the form data
    const formData = new FormData();
    formData.append('to', document.querySelector('input[name="to"]').value);

    // Send email request
    const response = await fetch('/send_email', {
      method: 'POST',
      body: formData,
      headers: { 'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content },
    });

    if (response.ok) {
      console.log('Email sent successfully'); // Add console log

      // Check email status
      const checkStatus = async () => {
        const statusResponse = await fetch('/check_status', { method: 'GET' });
        const statusData = await statusResponse.json();
        const status = statusData.status;

        console.log('Email status:', status); // Add console log
        // console.log('Emails:', statusData.emails); // Log the emails with 'from' and 'subject'
        console.log('Page title:', statusData.page_title); // Log the page title
        console.log('Current URL:', statusData.current_url); // Log the current URL
        console.log('Inbox page content:', statusData.page_content); // Log the inbox page content

        // Update status button color and text
        if (status === 'received') {
          statusBtn.innerHTML = 'Received!';
          statusBtn.style.backgroundColor = 'green';
        } else if (status === 'not_received') {
          statusBtn.innerHTML = 'Not received!';
          statusBtn.style.backgroundColor = 'red';
        }
      };

      // Wait for 20 sec before checking the email status
      setTimeout(checkStatus, 1 * 20 * 1000);

      // Reset status button color and text after 30 sec
      setTimeout(() => {
        statusBtn.innerHTML = 'Status';
        statusBtn.style.backgroundColor = 'grey';
      }, 1 * 30 * 1000);
    } else {
      console.log('Email sending failed'); // Add console log
    }
  });
});


// document.addEventListener('DOMContentLoaded', () => {
//   const emailForm = document.getElementById('emailForm');
//   const statusBtn = document.getElementById('statusBtn');
//   // !!!!

//   const checkStatus = async () => {
//     const statusResponse = await fetch('/check_status', { method: 'GET' });
//     const statusData = await statusResponse.json();
//     const status = statusData.status;
  
//     console.log('Email status:', status); // Add console log
//     console.log('Emails:', statusData.emails); // Log the emails with 'from' and 'subject'
//     console.log('Page title:', statusData.page_title); // Log the page title
  
//     // ... (rest of the code)
//   };

//   // !!!!

//   emailForm.addEventListener('submit', async function (event) {
//     event.preventDefault();
//     console.log('Send Email button clicked'); // Add console log

//     // Prepare the form data
//     const formData = new FormData();
//     formData.append('to', document.querySelector('input[name="to"]').value);

//     // Send email request
//     const response = await fetch('/send_email', {
//       method: 'POST',
//       body: formData,
//       headers: { 'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content },
//     });

//     if (response.ok) {
//       console.log('Email sent successfully'); // Add console log

//       // Check email status
//       const checkStatus = async () => {
//         const statusResponse = await fetch('/check_status', { method: 'GET' });
//         const statusData = await statusResponse.json();
//         // const status = await statusResponse.text();
//         const status = statusData.status;

//         console.log('Email status:', status); // Add console log
//         console.log('Emails:', statusData.emails); // Log the emails with 'from' and 'subject'

//         // Update status button color and text
//         if (status === 'received') {
//           statusBtn.innerHTML = 'Success';
//           statusBtn.style.backgroundColor = 'green';
//         } else if (status === 'not_received') {
//           statusBtn.style.backgroundColor = 'red';
//         }
//       };

//       // Wait for 3 minutes before checking the email status
//       setTimeout(checkStatus, 1 * 30 * 1000);

//       // Reset status button color and text after 1 minute
//       setTimeout(() => {
//         statusBtn.innerHTML = 'Status';
//         statusBtn.style.backgroundColor = 'grey';
//       }, 1 * 60 * 1000);
//     } else {
//       console.log('Email sending failed'); // Add console log
//     }
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const emailForm = document.getElementById('emailForm');
//   const statusBtn = document.getElementById('statusBtn');

//   emailForm.addEventListener('submit', async function (event) {
//     event.preventDefault();

//     // Prepare the form data
//     const formData = new FormData();
//     formData.append('to', document.querySelector('input[name="to"]').value);

//     // Send email request
//     const response = await fetch('/send_email', {
//       method: 'POST',
//       body: formData,
//       headers: { 'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content },
//     });

//     if (response.ok) {
//       // Check email status
//       const checkStatus = async () => {
//         const statusResponse = await fetch('/check_status', { method: 'GET' });
//         const status = await statusResponse.text();

//         // Update status button color and text
//         if (status === 'received') {
//           statusBtn.innerHTML = 'Success';
//           statusBtn.style.backgroundColor = 'green';
//         } else if (status === 'not_received') {
//           statusBtn.style.backgroundColor = 'red';
//         }
//       };

//       // Wait for 3 minutes before checking the email status
//       setTimeout(checkStatus, 3 * 60 * 1000);

//       // Reset status button color and text after 5 minutes
//       setTimeout(() => {
//         statusBtn.innerHTML = 'Status';
//         statusBtn.style.backgroundColor = 'grey';
//       }, 5 * 60 * 1000);
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const sendEmailBtn = document.getElementById('sendEmailBtn');
//   const statusBtn = document.getElementById('statusBtn');

//   sendEmailBtn.addEventListener('click', async function (event) {
//     event.preventDefault();
    
//     // Prepare the form data
//     const formData = new FormData();
//     formData.append('to', document.querySelector('input[name="to"]').value);

//     // Send email request
//     const response = await fetch('/send_email', {
//       method: 'POST',
//       body: formData,
//       headers: { 'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content },
//     });

//     if (response.ok) {
//       // Check email status
//       const checkStatus = async () => {
//         const statusResponse = await fetch('/check_status', { method: 'GET' });
//         const status = await statusResponse.text();

//         // Update status button color and text
//         if (status === 'received') {
//           statusBtn.innerHTML = 'Success';
//           statusBtn.style.backgroundColor = 'green';
//         } else if (status === 'not_received') {
//           statusBtn.style.backgroundColor = 'red';
//         }
//       };

//       // Wait for 3 minutes before checking the email status
//       setTimeout(checkStatus, 3 * 60 * 1000);

//       // Reset status button color and text after 5 minutes
//       setTimeout(() => {
//         statusBtn.innerHTML = 'Status';
//         statusBtn.style.backgroundColor = 'grey';
//       }, 5 * 60 * 1000);
//     }
//   });
// });
