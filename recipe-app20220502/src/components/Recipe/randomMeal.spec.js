import { mount } from "@vue/test-utils";
import RandomMeal from './RandomMealComp.vue';

describe('In RandomMeal Component', () => {
    it('has No data so test should fail', () => {
        expect(typeof RandomMeal.data).toBe('function')
    })
});