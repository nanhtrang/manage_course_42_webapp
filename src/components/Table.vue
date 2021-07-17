<template>
  <div class="col-12 m-0 p-0">
    <table class="w-100">
      <thead>
        <th v-for="header in headers" :key="id">
          {{ header.title}}
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
                <div class="col-sm-3"><i class="fas fa-eye"></i></div>
                <div class="col-sm-3"><i class="fas fa-pen"></i></div>
                <div class="col-sm-3"><i class="fas fa-trash-alt"></i></div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'table-vue',
  props: {
    headers: [],
    desserts: []
  }
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
