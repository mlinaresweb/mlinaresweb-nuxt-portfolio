<template>
  <v-app >
    <div  class="layout-container">
      <SideBar class="bg-primary container-border" />
      <v-main class="main-content" >
        <div class="page-container bg-primary container-border" >
          <SubNav />
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </v-main>
    </div>
  </v-app>
</template>
<script lang="ts">

</script>

<style >
.layout-container {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  height: 100vh;
  overflow: hidden; /* No queremos que el contenedor principal se desplace */
}

.page-container {
  flex: 1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

 

  .main-content {
    height: auto;
  }
}
}
</style>
