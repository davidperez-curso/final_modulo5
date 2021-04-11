import Vuex from 'vuex'
import Vue from 'vue'
import { shallowMount } from "@vue/test-utils"

import InputProduct from "@/components/InputProduct.vue"
import index from '@/store/index'

Vue.use(Vuex)

const store = new Vuex.Store(index)

it('store esta cargada', () => {
    // instancia del componente
    const wrapper = shallowMount(InputProduct, {
        store
    })
});

it('el objeto descripción no debe tener información', () => {
    //instancia del componente
    const wrapper = shallowMount(InputProduct, {
        store
    })
    // se testea el objeto
    expect(wrapper.vm.descripcion).toEqual({nombre: "", monto: "", estado: false})
    
});