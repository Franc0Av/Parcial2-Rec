<template>
    <div v-if="showList" class="list-container">
    <ul>
      <li v-for="(libro, index) in libros" :key="index">
        <div class="data">
          <div class="data-body">
            <i class="bi bi-book" style="font-size: 1.5rem; color: #ea6d67;"></i>
            <div class="bg-warning fs-5 fw-bold">Nombre</div>
            <div class="fw-semibold">{{ libro.nombre }}</div>
          </div>
          <div class="data-body">
            <div class="bg-warning fs-5 fw-bold">Autor</div>
            <div class="fw-semibold">{{ libro.autor }}</div>
          </div>
          <div class="data-body">
            <div class="bg-warning fs-5 fw-bold">Año</div>
            <div class="fw-semibold">{{ libro.año }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    libros: {
      type: Array,
      required: true
    },
    showList: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.data{
  display: flex;
  align-items: center;
  border: 1px solid rgb(62, 63, 63);
  border-radius: 6px;
  gap: 1rem;
  width: 100%
}
.data-body{
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem;
}
</style>