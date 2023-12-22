<script>
  export let isOpen = false;
</script>

<style>
  .sidebar {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: -300px; /* Aggiunto margine sinistro iniziale per nascondere la sidebar */
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    padding-left: 16px;
    transition: 0.5s;
  }

  .sidebar.open {
    left: 0; /* Cambiato il margine sinistro quando la sidebar è aperta */
  }

  .sidebar a {
    padding: 8px 8px 8px 16px;
    text-decoration: none;
    font-size: 18px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidebar a:hover {
    color: #f1f1f1;
  }

  .label {
    color: #818181;
    font-size: 18px;
    margin: 10px 0;
  }
</style>

<div class="{`sidebar ${isOpen ? 'open' : ''}`}">
  <div class="label">Menu</div>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
  </ul>
</div>

