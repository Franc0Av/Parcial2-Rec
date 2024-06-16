<template>
    <div class="boxContainer">
      <div class="form-floating mb-3 w-100">
        <input
          id="floatingInput"
          :class="inputClass"
          :type="typeInput"
          :required="required"
          v-model="inputValue"
          @input="sendValue"
          placeholder="name"
        />
        <label for="floatingInput">{{label}}</label>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputForm',
    data() {
        return{
            inputValue: null
        };
    },
    props: {
      label: {
        type: String,
        required: true
      },
      labelId:{
        type: String,
      },
      errorMessage: {
        type: String,
        default: ''
      },
      typeInput: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean,
        default: false
      }
  },
  computed: {
    inputClass() {
      return this.errorMessage ? "form-control is-invalid w-100 shadow mb-5 bg-body-tertiary rounded" : "form-control w-100 shadow mb-5 bg-body-tertiary rounded";
    }
  },
  methods: {
        sendValue(){
            this.$emit('input-value', this.inputValue)
        }
    }
  };
  </script>
  
  <style scoped>
  @import '../assets/InputForm.css'
  </style>
  