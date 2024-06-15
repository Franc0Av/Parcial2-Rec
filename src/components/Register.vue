<template>
    <form class="formContainer" @submit.prevent="handleSubmit">
      <InputForm
      label="Nombre:"
      labelId="nombre"
      @input-value="handleData('nombre', $event)"
      :errorMessage="errors.nombre ? 'El nombre del libro es obligatorio.' : ''"
      required
      />
      <InputForm
      label="Autor:"
      labelId="autor"
      @input-value="handleData('autor', $event)"
      :errorMessage="errors.autor ? 'El nombre de autor es obligatorio.' : ''"
      required
      />
      <InputForm
      label="Año de publicación:"
      labelId="año"
      typeInput="number"
      @input-value="handleData('año', $event)"
      :errorMessage="errors.año ? 'El año ingresado es nulo o mayor a 2024.' : ''"
      required
      />
      <div>
      </div>
      <div class="btnContainer">
        <button @click="handleSubmit" type="submit">Registrar libro</button>
      </div>
    </form>

    <div>
      <h2>{{ nombre }}</h2>
      <h2>{{ autor }}</h2>
      <h2>{{ año }}</h2>
    </div>
  </template>
  
  <script>
  import InputForm from './InputForm.vue';
  import { validateNombre, validateAnio, validateAutor } from '../utils/utils';
  
  export default {
    components: {
      InputForm
  },
    name: 'RegisterForm',
    data() {
      return {
        nombre: '',
        autor: '',
        año: null,
        errors: {
          nombre: false,
          autor: false,
          año: false
        }
      };
    },
    methods: {
      handleData(propiedad, valorInput) {
        this[propiedad] = valorInput
      },
      validateForm() {
        this.errors.nombre = !validateNombre(this.nombre);
        this.errors.autor = !validateAutor(this.autor);
        this.errors.año = !validateAnio(this.año);
      },
      handleSubmit() {
        this.validateForm();
        console.log(this.nombre, this.autor, this.año)
        if (!this.errors.nombre && !this.errors.autor && !this.errors.año) {
          alert('Formulario enviado correctamente');
        } else {
            setTimeout(() => {
                this.errors = {
                    nombre: false,
                    autor: false,
                    año: false
                };
            }, 5000);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import '../assets/Register.css'
  </style>
  