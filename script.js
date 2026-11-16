const roleFilter = document.getElementById('role-filter');
const playerCards = document.querySelectorAll('.album .title');

if (roleFilter) {
  roleFilter.addEventListener('change', function () {
    const selectedRole = roleFilter.value;

    playerCards.forEach(function (card) {
      const cardRole = card.getAttribute('data-role');

      if (selectedRole === 'wszyscy' || cardRole === selectedRole) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

const sparingForm = document.getElementById('sparing-form');
const formStatus = document.getElementById('form-status');

if (sparingForm) {
  sparingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const teamName = document.getElementById('team-name').value;
    formStatus.textContent = 'Dziękujemy, ' + teamName + '! Twoje zgłoszenie na sparing zostało zapisane.';
    formStatus.hidden = false;

    sparingForm.reset();
  });
}