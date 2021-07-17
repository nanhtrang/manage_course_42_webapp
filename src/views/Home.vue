<template>
  <div class="m-2 p-2">
    <!-- manage course list -->
    <div class="col-12 m-0 p-0 home-content mb-4" style="border-top: 2px blue solid">
      <div class="col-12 m-0 p-0 row">
        <div class="col-4 row m-0 p-0">
          <div class="col-1 m-0 p-0 d-flex align-items-center justify-content-center">
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
            <input class="form-control" type="text">
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-3">
          <div class="col-12">
            Course Code <label class="lbl-required">*</label>
          </div>
          <div class="col-12">
            <input class="form-control" type="text">
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-3">
          <div class="col-12">
            Course Alias <label class="lbl-required">*</label>
          </div>
          <div class="col-12">
            <input class="form-control" type="text">
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
          <div class="col-1 m-0 p-0 d-flex align-items-center justify-content-center">
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
            <div class="col-12 m-0 p-0">
              Showing 1 - 2 of 2 items
            </div>
            <div class="col-12 m-0 p-0">
              <table-vue
                :headers="headers"
              >
              </table-vue>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TableVue from '../components/Table.vue'
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
      ]
    }
  },
  components: {
    'table-vue': TableVue
  }
}
</script>

<style>
.lbl-required {
  color: red;
}
.home-content {
  background-color: white;
}
</style>
