<template>
  <v-app >
    <div  class="layout-container">
      <SideBar :style="{ backgroundColor: $vuetify.theme.current.colors.primary }" />
      <v-main class="main-content" >
        <div class="page-container" :style="{ backgroundColor: $vuetify.theme.current.colors.primary }">
          <SubNav />
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </v-main>
    </div>
  </v-app>
</template>

<style >
.layout-container {
  display: flex;
  height: 100vh;
  background-color: var(--v-primary-base);
}

.main-content {
  flex: 1;
  display: flex;
  height: 100vh;
  overflow: hidden; /* No queremos que el contenedor principal se desplace */
}

.page-container {
  flex: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--v-primary-base);
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

/* Media queries para ajustar responsividad */
@media (max-width: 768px) {
  @media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }

  .sidebar-container {
    width: calc(100% - 30px); /* Restamos 15px de margen a cada lado */
    height: auto;
    margin: 15px;
  }

  .main-content {
    height: auto;
  }
}
}
</style>
