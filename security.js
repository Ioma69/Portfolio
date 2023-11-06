document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Empêche la soumission par défaut du formulaire
    event.preventDefault();

    // Récupère les valeurs des champs
    let name = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let message = document.getElementById('message').value;

    // Réinitialise les messages d'erreur
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (element) {
      element.textContent = '';
    });

    // Valide les champs
    let valid = true;

  
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Le champ Nom est obligatoire.';
        valid = false;
    } else if (name.length >= 50) {
        document.getElementById('name-error').textContent = 'Le nom ne doit pas dépasser 50 caractères.';
        valid = false;
    }


    if (!isValidEmail(email)) {
      document.getElementById('email-error').textContent = "L'adresse e-mail n'est pas valide.";
      valid = false;
    }  else if (email.length >= 100) {
        document.getElementById('email-error').textContent = "L'email ne doit pas dépasser 100 caractères.";
        valid = false;
    }

    if (message.trim() === '') {
      document.getElementById('message-error').textContent = 'Le champ Message est obligatoire.';
      valid = false;
    } else if (message.length >= 300) {
        document.getElementById('message-error').textContent = "Le message ne doit pas dépasser 350 caractères.";
        valid = false;
    }

    // Si tous les champs sont valides, soumettez le formulaire
    if (valid) {
      this.submit();
    }
  });

  // Fonction de validation de l'adresse e-mail
  function isValidEmail(email) {
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }