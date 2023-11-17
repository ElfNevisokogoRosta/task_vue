<template>
  <div class="task-container">
    <h2 class="title">Todo List</h2>
    <ul class="task-list">
      <li class="task-element">
        <h3 class="task-title">First task</h3>
        <p class="task-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis sapiente
          reiciendis quibusdam tempore quod, pariatur sed, veniam dolore mollitia distinctio enim
          reprehenderit, facere totam!
        </p>
        <div class="status-container">
          <h3>Status</h3>
          <form class="status-picker" action="">
            <label  class="status-box rejected" for=""><input type="checkbox"></label>
            <label class="status-box pending"  for=""><input type="checkbox" checked></label>
            <label  class="status-box fullfield" for=""><input type="checkbox"></label>
          </form>
        </div>
        <button class="delete-btn">Delete</button>
      </li>
      <li class="task-element">
        <h3 class="task-title">First task</h3>
        <p class="task-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis sapiente
          reiciendis quibusdam tempore quod, pariatur sed, veniam dolore mollitia distinctio enim
          reprehenderit, facere totam!
        </p>
        <div class="status-container">
          <h3>Status</h3>
          <form class="status-picker" action="">
            <label  class="status-box rejected" for=""><input type="checkbox"></label>
            <label class="status-box pending"  for=""><input type="checkbox" checked></label>
            <label  class="status-box fullfield" for=""><input type="checkbox"></label>
          </form>
        </div>
        <button class="delete-btn">Delete</button>
      </li>
      <li class="task-element">
        <h3 class="task-title">First task</h3>
        <p class="task-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis sapiente
          reiciendis quibusdam tempore quod, pariatur sed, veniam dolore mollitia distinctio enim
          reprehenderit, facere totam!
        </p>
        <div class="status-container">
          <h3>Status</h3>
          <form class="status-picker" action="">
            <label  class="status-box rejected" for=""><input type="checkbox"></label>
            <label class="status-box pending"  for=""><input type="checkbox" checked></label>
            <label  class="status-box fullfield" for=""><input type="checkbox"></label>
          </form>
        </div>
        <button class="delete-btn">Delete</button>
      </li>
      <li class="task-element">
        <h3 class="task-title">First task</h3>
        <p class="task-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis sapiente
          reiciendis quibusdam tempore quod, pariatur sed, veniam dolore mollitia distinctio enim
          reprehenderit, facere totam!
        </p>
        <div class="status-container">
          <h3>Status</h3>
          <form class="status-picker" action="">
            <label  class="status-box rejected" for=""><input type="checkbox"></label>
            <label class="status-box pending"  for=""><input type="checkbox" checked></label>
            <label  class="status-box fullfield" for=""><input type="checkbox"></label>
          </form>
        </div>
        <button class="delete-btn">Delete</button>
      </li>
    </ul>
  </div>
</template>
<style>
  .task-container{
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 25px;
    margin: 15px 25px;
  }
  .title{
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .task-list{
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }.task-element{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .task-title{
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    border: none;
  }
  .task-des{
    width: 264px;
    margin: 0;
    padding: 0;
    font-size: 15px;
    text-align: center;
    border: none;
  }
  .status-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .delete-btn{
    width: 100px;
    margin: 0;
    padding: 12px 23px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
  .status-box{
    cursor: pointer;
    display: block;
  }
  .status-picker{
    display: flex;
    justify-content: space-between;
  }
  .pending{
    background-color: rgb(255, 255, 0);
    border-radius: 5px;
  }
  .rejected{
    background-color: rgb(255, 0, 0);
    border-radius: 5px;
  }
  .fullfield{
    background-color: rgb(0, 255, 0);
    border-radius: 5px;
  }
</style>
