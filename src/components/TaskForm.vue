<template>
  <div class="container">
    <h2 class="title">Add some task</h2>
    <form action="">
      <div class="form-container">
        <label class="input-box " for="">
          <input class="input-title" type="text" />
        </label>
        <label class="input-box" for="">
          <textarea class="input-des" id="story" name="story" rows="5" cols="33"> </textarea>
        </label>
        <button>Add task</button>
      </div>
    </form>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.title {
  text-align: center;
  font-size: 30px;
  margin: 0px;
  padding: 0px;
}
.form-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.input-box{
  display: block;
  width: 100%;
  border: none;
}
.input-title{
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.input-des{
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
</style>
