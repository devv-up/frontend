import Vuetify from "vuetify";
import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import { Profile, Nav } from "@/components/layout/mixin";
import Header from "@/components/layout/header/index.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  updateDrawer: jest.fn()
};
const store = new Vuex.Store({ mutations });

describe("components/layout/header/index", () => {
  // eslint-disable-next-line
  let vuetify: any 

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should call updateDrawer mutation when the action drawer-btn is clicked", async () => {
    const wrapper = shallowMount(Header, {
      store,
      localVue,
      vuetify,
      mixins: [Profile, Nav]
    });
    wrapper.find(".drawer-btn").trigger("click");
    await wrapper.vm.$nextTick();

    expect(mutations.updateDrawer).toHaveBeenCalledTimes(0);
  });
});
