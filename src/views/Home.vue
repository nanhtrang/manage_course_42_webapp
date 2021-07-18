<template>
  <div class="m-2 p-2">
    <!-- manage course list -->
    <div
      class="col-12 m-0 p-0 home-content mb-4"
      style="border-top: 2px blue solid"
    >
      {{ path }} a
      <div class="col-12 m-0 p-0 row">
        <div class="col-4 row m-0 p-0">
          <div
            class="
              col-1
              m-0
              p-0
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <i class="fas fa-plus-square"></i>
          </div>
          <div class="col-4 m-0 p-0 d-flex align-items-center">
            Manage Course List
          </div>
        </div>
        <div class="col-8"></div>
      </div>
      <div class="col-12 m-0 p-0 row mt-4">
        <div class="col-lg-4 col-md-6 col-sm-3">
          <div class="col-12">
            Course Name <label class="lbl-required">*</label>
          </div>
          <div class="col-12">
            <input class="form-control" type="text" value="Ngọc" />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-3">
          <div class="col-12">
            Course Code <label class="lbl-required">*</label>
          </div>
          <div class="col-12">
            <input class="form-control" type="text" value="Ngọc" />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-3">
          <div class="col-12">
            Course Alias <label class="lbl-required">*</label>
          </div>
          <div class="col-12">
            <input class="form-control" type="text" value="Ngọc" />
          </div>
        </div>
      </div>
      <div class="col-12 m-0 p-0 row mt-4">
        <div class="col-12">
          <div class="col-12 mb-4">
            <button class="btn btn-primary mr-2">Create</button>
            <button class="btn btn-light">Reset</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 m-0 p-0 home-content" style="border-top: 2px blue solid">
      <div class="col-12 m-0 p-0 row">
        <div class="col-4 row m-0 p-0">
          <div
            class="
              col-1
              m-0
              p-0
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <i class="fas fa-plus-square"></i>
          </div>
          <div class="col-4 m-0 p-0 d-flex align-items-center">
            Views Course List
          </div>
        </div>
        <div class="col-8"></div>
      </div>
      <div class="col-12 m-0 p-0 row mt-4">
        <div class="col-12">
          <div class="col-12 mb-4">
            <div class="col-12 m-0 p-0">Showing 1 - 2 of 2 items</div>
            <div class="col-12 m-0 p-0">
              <div class="col-12 m-0 p-0">
                <table class="w-100">
                  <thead>
                    <!-- eslint-disable-next-line -->
                    <th v-for="header in headers" v-bind:key="id">
                      {{ header.title }}
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>asdasd</td>
                      <td>asdasd</td>
                      <td>asdasd</td>
                      <td><i class="fas fa-check-circle"></i></td>
                      <td>
                        <div class="col-12 m-0 p-0">
                          <div class="col-6 row m-0 p-0">
                            <div class="col-sm-3">
                              <i
                                class="fas fa-eye"
                                @click="showCourseDetail"
                              ></i>
                            </div>
                            <div class="col-sm-3">
                              <i class="fas fa-pen"></i>
                            </div>
                            <div class="col-sm-3">
                              <i class="fas fa-trash-alt"></i>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TableVue from '../components/Table.vue'
import { getAllCourse } from "../api/home";
export default {
  name: 'Home',
  data () {
    return {
      headers: [
        { title: 'Course Name', width: '100px' },
        { title: 'Course Code', width: '100px' },
        { title: 'Course Alias', width: '100px' },
        { title: 'Active Status', width: '100px' },
        { title: '', width: '100px' }
      ],
      demo: null,
      path: null
    }
  },
  components: {
    'table-vue': TableVue
  },
  mounted () {
    let vm = this

    // axios.get('http://localhost:8000/').then(response => (vm.demo = response))
    // console.log(vm.demo)
    // vm.path = getAllCourse()
    vm.path = vm.$http.get('http://localhost:8000/')
    vm.path = vm.path + 'asdasd'
  },
  methods: {}
}
</script>

<style>
.lbl-required {
  color: red;
}
.home-content {
  background-color: white;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
