let lastChecked = null;

// Credit card toggle
document.querySelectorAll('input[name="Credit_card_Radio"]').forEach(radio => {
  radio.addEventListener('click', function () {
    if (this === lastChecked) {
      this.checked = false;
      lastChecked = null;
    } else {
      lastChecked = this;
    }
  });
});


// Room Type toggle
document.querySelectorAll('input[name="Room_Type"]').forEach(radio => {
  radio.addEventListener('click', function () {
    if (this === lastChecked) {
      this.checked = false;
      lastChecked = null;
    } else {
      lastChecked = this;
    }
  });
});

//  window.onload = function () {
//     const url = new URL(window.location.href);
//     if (!url.searchParams.has("refreshed")) {
//       url.searchParams.set("refreshed", "true");
//       window.location.href = url.toString();
//       console.log('refresh')
//     } else {
//       // Clean the URL
//       url.searchParams.delete("refreshed");
//       window.history.replaceState({}, document.title, url.pathname);
//     }
//   };
  
// PDF Export
// function generatePDF() {
//   const element = document.getElementById("resume");
//   const opt = {
//     margin: 0,
//     filename: 'Meeting_Point_Participants.pdf',
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2, useCORS: true },
//     jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
//   };
//   html2pdf().set(opt).from(element).save();
// }


function generatePDF() {
  const element = document.getElementById("resume");

  // 1. Ensure zoom is normal (for iOS)
  document.body.style.zoom = "100%";
  document.body.style.webkitTextSizeAdjust = "100%"; // Prevents font zooming in Safari

  // 2. Scroll to top immediately
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  // 3. Allow layout to settle before generating PDF
  setTimeout(() => {
    const opt = {
      margin: 0,
      filename: 'Meeting_Point_Participants.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 2,             // Higher scale = better quality
        useCORS: true,
        scrollY: 0,
        scrollX: 0
      },
      jsPDF: {
        unit: 'pt',
        format: 'a4',
        orientation: 'portrait'
      }
    };

    html2pdf().set(opt).from(element).save();

    // (Optional) Reset scroll or zoom after download if needed
    // document.body.style.zoom = "initial";
  }, 300); // Delay lets browser finish layout
}


