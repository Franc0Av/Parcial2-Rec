<template>
    <div class="boxContainer">
      <div id="labelBox">
        <label :for="labelId">{{ label }}</label>
      </div>
      <div class="inputBox">
        <input
          :id="labelId"
          :type="typeInput"
          :required="required"
          v-model="inputValue"
          @input="sendValue"
        />
        <small v-if="errorMessage" class="error-message">{{ errorMessage }}</small>
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
  