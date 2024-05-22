        // Added button parameter to the function to receive the clicked button element
        function toggleText(button) {
            // Find the closest card element
            var card = button.closest('.card');
            // Find the .moreText paragraph within this card
            var text = card.querySelector('.moreText');
            // Toggle the hidden class and change button text
            if (text.classList.contains('hidden')) {
              text.classList.remove('hidden');
              button.innerHTML = 'Show Less';
            } else {
              text.classList.add('hidden');
              button.innerHTML = 'More information';
            }
          }