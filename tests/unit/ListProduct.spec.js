import Vuex from 'vuex'
import Vue from 'vue'
import { shallowMount } from "@vue/test-utils"

import ListProduct from "@/components/ListProduct.vue"
import index from '@/store/index'

Vue.use(Vuex)

const store = new Vuex.Store(index)

it('store esta cargada', () => {
    // instancia del componente
    const wrapper = shallowMount(ListProduct, {
        store
    })
});

it('el array productos debe tener 1 objeto', () => {
    //instancia del componente
    const wrapper = shallowMount(ListProduct, {
        store
    })
    // se agrega un objeto al array vacio
    store.state.productos.push({nombre: "prueba", monto: "10", estado: false})
    // se espera que el array tenga 1 dato
    expect(wrapper.vm.productos).toHaveLength(1)
    // se espera que tenga los datos que se le dieron
    expect(wrapper.vm.productos).toEqual([{nombre: "prueba", monto: "10", estado: false}])
});

it('el dato debe estar vacio', () => {
    //instancia del componente
    const wrapper = shallowMount(ListProduct, {
        store
    })
    //se espera que no tenga datos
    expect(wrapper.vm.total).toEqual("")
});

it('el dato debe estar vacio', () => {
    //instancia del componente
    const wrapper = shallowMount(ListProduct, {
        store
    })
    //se espera que no tenga datos
    expect(wrapper.vm.pagar).toEqual("")
});

it('el dato debe estar vacio', () => {
    //instancia del componente
    const wrapper = shallowMount(ListProduct, {
        store
    })
    //se espera que no tenga datos
    expect(wrapper.vm.pagado).toEqual("")
});