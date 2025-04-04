import { mount, flushPromises } from '@vue/test-utils';
import Methods from './methods.js';
import axios from 'axios'

describe('Methods', () => {

    let wrapper;

    // Fake component so that we can mount the mixin in it and test the mixin code.
    const mockComponent = {
        template: `<div class="mock">
                    <button id="button1" @click="goToSearchResults">Click</button>
                    <button id="button2" @click="getRecipe">Click</button>
                    <button id="button3" @click="getRecipeList">Click</button>
                    </div>`,
    };

    beforeAll(() => {
        wrapper = mount(mockComponent, {
            mixins: [Methods],
        });
    });

    it('should be defined', () => {
        expect(wrapper.vm).toBeDefined();
    });

    const spyGoToSearchResults = jest.spyOn(Methods.methods, 'goToSearchResults');
    it('Checks if the method is called', () => {
        wrapper.find('#button1').trigger("click");
        expect(spyGoToSearchResults).toHaveBeenCalled();
    });

    const spyGetRecipe = jest.spyOn(Methods.methods, 'getRecipe');
    it('Checks if the method is called', () => {
        wrapper.find('#button2').trigger("click");
        expect(spyGetRecipe).toHaveBeenCalled();
    });

    const spyGetRecipeList = jest.spyOn(Methods.methods, 'getRecipeList');
    it('Checks if the method is called', () => {
        wrapper.find('#button3').trigger("click");
        expect(spyGetRecipeList).toHaveBeenCalled();
    });

});