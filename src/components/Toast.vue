<template>
  <div ref="toastElement" class="toast align-items-center text-bg-success border-0 position-fixed top-0 end-0 m-3" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        Libro registrado exitosamente.
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle';

export default {
  name: 'SuccessToast',
  setup() {
    const toastElement = ref(null);

    const showToast = () => {
      const myToast = new bootstrapBundle.Toast(toastElement.value);
      myToast.show();
    };

    return {
      toastElement,
      showToast
    };
  }
};
</script>

<style scoped>
</style>
