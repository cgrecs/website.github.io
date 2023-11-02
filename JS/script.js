
function showOverlay(src, description) {
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');
  const overlayText = document.getElementById('overlay-text');
  
  overlay.style.display = 'block';
  overlayImage.src = src;
  overlayText.innerHTML = description;
}

function closeOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

let messageElement = document.getElementById('message');
if (messageElement) {
  messageElement.addEventListener('input', function() {
      const maxLength = 300;
      const currentLength = this.value.length;
      const charsRemaining = maxLength - currentLength;
      document.getElementById('charCount').innerText = charsRemaining + " characters remaining";
  });
}

// Get the modal, the button that opens the modal, and the close button
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var closespan = document.getElementsByClassName("close")[0];



if (btn) {
  btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
  }
}

span.onclick = function() {
modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

function openImageModal(element) {
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imageModalImage");

modal.style.display = "block";
modalImg.src = element.src;
}

function closeImageModal() {
const modal = document.getElementById("imageModal");
modal.style.display = "none";
}


var paymentModal = document.getElementById("paymentModal");
var buyNowBtns = document.querySelectorAll(".buy-now");
var closePaymentModal = document.querySelector(".payment-modal .payment-close");
var imageModal = document.getElementById("imageModal");
var paymentspan = document.querySelector(".payment-close");


closePaymentModal.onclick = function() {
    paymentModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == imageModal) {
      imageModal.style.display = "none";
  } else if (event.target == paymentModal) {
      paymentModal.style.display = "none";
  }
};

buyNowBtns.forEach(function(button) {
    button.onclick = function() {
        paymentModal.style.display = "block";
    }
});





