<template>
  <div
    class="drop-zone"
    @dragover.prevent="dragOver"
    @dragenter.prevent="dragEnter"
    @dragleave.prevent="dragLeave"
    @drop.prevent="handleDrop"
  >
    <slot :isDragActive="isDragActive"></slot>
  </div>
</template>

<script>
export default {
  name: 'DropZone',
  data() {
    return {
      isDragActive: false,
    };
  },
  methods: {
    dragOver() {
      this.isDragActive = true;
    },
    dragEnter() {
      this.isDragActive = true;
    },
    dragLeave() {
      this.isDragActive = false;
    },
    handleDrop(e) {
      this.isDragActive = false;
      this.$emit('files-dropped', Array.from(e.dataTransfer.files));
    },
  },
};
</script>

<style>
.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
}
.drop-zone.active {
  background-color: #fafafa;
}
</style>
