export function validateNombre(nombre) {
    return nombre.length > 0;
  }
  
  export function validateAnio(anio) {
    if(anio === null || anio > 2024)
      {
        return false;
      }
      return true
  }
  
  export function validateAutor(autor) {
    return autor.length > 0;
  }
  