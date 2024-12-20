document.getElementById('copyBtn').addEventListener('click', function() {
    // Select the text you want to copy
    const textToCopy = document.getElementById('textToCopy').textContent;
  
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        alert('Failed to copy text: ', err);
      });
  });
  

// resume download
function downloadCV() {
    window.location.href = "CV/DeepakResume1.pdf";
}


  document.getElementById('redirectToWhatsApp').addEventListener('click', function() {
    // Replace with the desired phone number (include the country code, e.g., 91 for India)
    const phoneNumber = '9693586284'; 
    
    // Optional: Customize the message to send
    const message = 'Hello! I would like to chat with you.';
  
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  });
  

  //email

  document.getElementById('redirectToEmail').addEventListener('click', function() {
    // Replace with the recipient email address
    const email = 'deepakkrao27@outlook.com'; 
    
    // Customize the subject and body of the email
    const subject = 'Collaboration Inquiry';
    const body = 'Hello, I want to work with you.';
  
    // Construct the mailto URL
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Redirect to the email client
    window.location.href = mailtoUrl;
  });