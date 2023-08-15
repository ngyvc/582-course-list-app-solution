import { shallowMount } from "@vue/test-utils";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseItem.vue", () => {
  it("renders props.course when passed", () => {
    const course = {
      name: "Vue.js",
      description: "The Progressive JavaScript Framework",
      hours: 50,
      credits: 3,
      location: "Online",
      instructor: "John Doe",
      id: 1,
      enrollment: 10,
    };
    const wrapper = shallowMount(CourseItem, {
      propsData: { course },
    });
    expect(wrapper.find("h2").text()).toBe(course.name);
  });
  it("hides the button when class isFull is true", () => {
    const course = {
      name: "Vue.js",
      description: "The Progressive JavaScript Framework",
      hours: 50,
      credits: 3,
      location: "Online",
      instructor: "John Doe",
      id: 1,
      enrollment: 20,
    };
    const wrapper = shallowMount(CourseItem, {
      propsData: { course },
    });
    expect(wrapper.find("button").exists()).toBe(false);
  });
  it("displays the button when class isFull is false", async () => {
    const course = {
      name: "Vue.js",
      description: "The Progressive JavaScript Framework",
      hours: 50,
      credits: 3,
      location: "Online",
      instructor: "John Doe",
      id: 1,
      enrollment: 0,
    };
    const wrapper = shallowMount(CourseItem, {
      propsData: { course },
    });
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Add Course");

    await wrapper.find("button").trigger("click");

    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Remove Course");
  });
  it("emits an event when buttons are clicked", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().addCourse).toBeTruthy();
    expect(wrapper.emitted().addCourse[0][0]).toBe(0);
  });
  it("emits an event when buttons are clicked", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().removeCourse).toBeTruthy();
    expect(wrapper.emitted().removeCourse[0][0]).toBe(0);
  });
});
