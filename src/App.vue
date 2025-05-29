<template>
  <div>
    <header class="navbar">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.navbar {
  background: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
nav {
  display: flex;
  gap: 1.5rem;
}
a.router-link-active {
  font-weight: bold;
  color: #0077cc;
}
</style>
