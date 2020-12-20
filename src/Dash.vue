<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-light">
      <!-- Left Navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/" class="nav-link" data-widget="pushmenu" role="button">
            <i class="fas fa-bars"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- Navbar -->

    <!-- Main Sidebar Container -->
    <aside
      class="main-sidebar sidebar-dark-primary elevation-4 sidebar-wrapper"
    >
      <!-- Brand Logo -->
      <a href="/" class="brand-link">
        <!-- <img
          src="./assets/images/icon.png"
          alt="AdminLTE Logo"
          style="opacity: 0.8"
          class="brand-image img-circle elevation-3"
        /> -->
        <span class="brand-text font-weight-light">Admin LTE</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="./assets/images/admin-icon.png"
              alt="User image"
              class="img-circle elevation-2"
            />
          </div>
          <div class="info">
            <a href="/" class="d-block">Admin LTE</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
          >
            <li class="nav-item">
              <router-link
                tag="a"
                active-class="active"
                exact
                to="/"
                class="nav-link"
              >
                <i class="nav-icon fas fa-tachometer-alt mr-2"></i>
                <span>Dashboard</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>
