import { shallowMount } from "@vue/test-utils";
import CourseList from "@/components/CourseList.vue";

describe("CourseList.vue", () => {
  it("emits a course id when addCourse is triggered", async () => {
    const courseId = 1;
    const wrapper = shallowMount(CourseList);
    await wrapper.vm.addCourse(courseId);
    expect(wrapper.emitted().addCourse).toBeTruthy();
    expect(wrapper.emitted().addCourse[0][0]).toEqual(courseId);
  });
  it("emits a course id when removeCourse is triggered", async () => {
    const courseId = 1;
    const wrapper = shallowMount(CourseList);
    await wrapper.vm.removeCourse(courseId);
    expect(wrapper.emitted().removeCourse).toBeTruthy();
    expect(wrapper.emitted().removeCourse[0][0]).toEqual(courseId);
  });
});
