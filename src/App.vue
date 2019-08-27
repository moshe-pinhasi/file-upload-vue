<template>
  <div id="app">
    <!-- <h1>Anonymous File Uploader System</h1>
    <div>
      <uploads-container v-on: files-uploaded="filesUploaded"></uploads-container>
    </div>
    <div>
      <uploaded-files ref="filesList" v-bind:files.sync="files"></uploaded-files>
    </div> -->

      <upload-file />

  </div>
</template>

<script>
// import axios from "axios";
// import UploadedFiles from "@/components/UploadedFilesList";
// import UploadsContainer from '@/components/UploadsContainer'
import UploadFile from './components/UploadFile'
export default {
  name: 'app',
  data() {
    return {
      files: []
    };
  },
  components: {
    UploadFile
  },
  // methods: {
  //   filesUploaded(files) {
  //     this.$refs.filesList.filesUploaded(files)
  //   }
  // }
}
</script>

<style lang="scss">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
