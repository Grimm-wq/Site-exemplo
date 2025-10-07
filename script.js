// Efeito de rolagem suave 💨
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mensagem no console para diversão 🤖
console.log("💧 Bem-vindo ao site da coleção de garrafinhas!");
