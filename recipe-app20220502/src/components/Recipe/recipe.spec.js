import { mount } from "@vue/test-utils";
import Recipe from './RecipeComp.vue';

describe('In Recipe Component', () => {
    it('has No data so test should fail', () => {
        expect(typeof Recipe.data).toBe('function')
    })
});