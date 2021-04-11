import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    descripcion: {
      nombre: "",
      monto: "",
      estado: false,
    },
    totales:[],
    total: "",
    porPagar:[],
    pagar:"",
    porPagado:[],
    pagado:""
  },
  mutations: {
    addProduct(state){
      const a = state.descripcion.nombre;
      const b = state.descripcion.monto;

      state.productos.push({nombre: a, monto: b, estado: false})

      state.porPagar.push(parseInt(b))
      state.totales.push(parseInt(b))

      state.descripcion.nombre = "";
      state.descripcion.monto = "";

      state.pagar = state.porPagar.reduce((a,b)=> a + b, 0);
      state.total = state.totales.reduce((a,b)=> a + b, 0);
    },
    changeProduct(state,index){
      const valor = parseInt(state.productos[index].monto);
      const pagados = state.porPagado.reduce((a,b)=> a + b, 0);
      const debemos = state.porPagar.reduce((a,b)=> a + b, 0);
      if (state.productos[index].estado == false) {
        
        state.productos[index].estado = true
        
        state.porPagar.push(-valor);
        state.pagar = eval(debemos - valor);
        
        state.porPagado.push(valor)
        state.pagado = eval(pagados + valor)
      } else {
        state.productos[index].estado = false
        
        state.porPagar.push(valor);
        state.pagar = eval(debemos + valor);
        
        state.porPagado.push(-valor)
        state.pagado = eval(pagados - valor)
      }
       
    }
  },
  actions: {
  },
  modules: {
  }
})
