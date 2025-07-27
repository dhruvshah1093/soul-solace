<template>
  <div class="form-container">
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style scoped>
  .form-container {
    background: #ffffff;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.2rem;
  }
input, textarea {
  padding: 1rem;
  font-size: 1.1rem;
}
button {
  font-size: 1.2rem;
}
</style>
