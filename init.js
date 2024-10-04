// send leads to Google Ads   
  function sendLeadToGoogleAds(uniqueId) {
    gtag('event', 'conversion', {
      'send_to': `AW-REPLACE_FOR_ID/${uniqueId}`,
      'event_callback': function () {
        console.log('Lead sent to Google Ads:', uniqueId);
      }
    });
  }
 
  function clickToContact(event) { 
    const linkElement = event.target.closest('a');

    if (!linkElement || !linkElement.href) {
      return;  
    }

    const url = linkElement.href;
 
    if (url.includes('wa.me')) {
      sendLeadToGoogleAds('UNIQUE_GA_CONVERSION_ID');
    } else if (url.includes('t.me')) {
      sendLeadToGoogleAds('UNIQUE_GA_CONVERSION_ID');
    } else if (url.includes('facebook.com')) {
      sendLeadToGoogleAds('UNIQUE_GA_CONVERSION_ID');
    } else if (url.includes('instagram.com')) {
      sendLeadToGoogleAds('UNIQUE_GA_CONVERSION_ID');
    } else if (url.includes('linkedin.com')) {
      sendLeadToGoogleAds('UNIQUE_GA_CONVERSION_ID');
    } else if (url.includes('tel:')) {
      sendLeadToGoogleAds('UNIQUE_GA_CONVERSION_ID');
    } else if (url.includes('mailto:')) {
      sendLeadToGoogleAds('UNIQUE_GA_CONVERSION_ID');
    }
  }
 
  const allLinks = document.querySelectorAll('a');
 
  allLinks.forEach(link => {
    link.addEventListener('click', clickToContact);
  });