<template>
    <section class="sectionContainer">
      <form class="formContainer" @submit.prevent="handleSubmit">
      <InputForm
      label="Nombre"
      labelId="nombre"
      @input-value="handleData('nombre', $event)"
      :errorMessage="errors.nombre ? 'El nombre del libro es obligatorio.' : ''"
      />
      <InputForm
      label="Autor"
      labelId="autor"
      @input-value="handleData('autor', $event)"
      :errorMessage="errors.autor ? 'El nombre de autor es obligatorio.' : ''"
      />
      <InputForm
      label="Año de publicación"
      labelId="año"
      typeInput="number"
      @input-value="handleData('año', $event)"
      :errorMessage="errors.año ? 'El año ingresado es nulo o mayor a 2024.' : ''"
      />
      <div>
      </div>
      <div class="btnContainer">
        <button class="btn btn-success" type="submit">Registrar libro</button>
      </div>
    </form>
    <BookList :libros="libros" :showList="showList" />
    </section>
    <Toast ref="successToast" />
  </template>
  
  <script>
  import InputForm from './InputForm.vue';
  import BookList from './BookList.vue';
  import Toast from './Toast.vue';

  import { validateNombre, validateAnio, validateAutor } from '../utils/utils';
  
  export default {
    components: {
      InputForm,
      BookList,
      Toast
    },
    name: 'RegisterForm',
    data() {
      return {
        nombre: '',
        autor: '',
        año: null,
        showList: false,
        libros: [],
        errors: {
          nombre: false,
          autor: false,
          año: false,
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
        return !this.errors.nombre && !this.errors.autor && !this.errors.año;
      },
      resetForm() {
        this.nombre = '';
        this.autor = '';
        this.año = null;
        this.errors = {
          nombre: false,
          autor: false,
          año: false
        }
      },
      handleSubmit() {
        if (this.validateForm()) {
          const libro = {
            nombre: this.nombre,
            autor: this.autor,
            año: this.año
          };
          this.libros.push(libro);
          this.showList = true;
          this.resetForm();
          this.$refs.successToast.showToast();
        }else {
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
  }
  </script>
  
  <style scoped>
  @import '../assets/Register.css'
  </style>
  