<template>
  <div style="overflow-y:scroll;overflow-x:hidden;height:100%">
  <div class="clever-category bg-img" style="background-image: url(../../assets/img/coursetop.jpg);">
    <h3>热门课程</h3>
  </div>
    <div class='course-list'>
      <div class='list-main'>
        <ul class='list-c'>
          <li>
            <router-link to="/student/problem">
            <img src="../../assets/img/course.png" />
            <div class='course-content'>
              <h3>python程序设计</h3>
              <div>学生数：50人</div>
                <div class='price-total'>老师：王普明</div>
            </div>
            </router-link>
          </li>
          <li>
            <img src="../../assets/img/course.png" />
            <div class='course-content'>
              <h3>C++程序设计</h3>
              <div>学生数：45人</div>
              <div class='price-total'>老师：王普明</div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/course.png" />
            <div class='course-content'>
              <h3>数据库概论</h3>
              <div>学生数：40人</div>
              <div class='price-total'>老师：张璇</div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/course.png" />
            <div class='course-content'>
              <h3>数据结构</h3>
              <div>学生数：55人</div>
              <div class='price-total'>老师：赵娜</div>
            </div>
          </li>
          <li>
            <img src="../../assets/img/course.png" />
            <div class='course-content'>
              <h3>计算机网络</h3>
              <div>学生数：40人</div>
              <div class='price-total'>老师：刘春花</div>
            </div>
          </li>
        </ul>

        <div class='list-b'>
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {courseSearch} from "../../request/api/course";
import {ref} from "vue";

//课程数据
let courseList =[];
courseSearch().then(res=>{
  courseList = res;
  console.log(courseList)
}).catch(err=>{console.log(err)})

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .clever-category {
    display: flex;
    width: 100%;
    height: 80px;
    position: relative;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    z-index: 2;
  h3 {
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    color: #3762f0;
    margin-bottom: 0;
  }
  }
  .clever-category::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    background-color: rgba(215, 224, 252, 0.9);
    z-index: -1;
  }
  .bg-img {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .course-filter{
    width: 100%;
    height: 197px;
    background: #F3F5F9;
  }
  .filter-main{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1000px;
    height: 197px;
    margin: 0 auto;
  }
  .filter-item{
    display: flex;
    align-items: center;
  }
  .item-title{
    margin-left: 20px;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
  }
  .filter-item ul{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .filter-item ul li{
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    color: #515759;
    cursor: pointer;
  }
  .filter-item ul li.filter-all{
    width: 50px;
    line-height: 30px;
    text-align: center;
    color: #388fff;
    font-size: 14px;
    background: rgba(44,128,255,.1);
    border-radius: 5px;
  }
  .course-list{
    padding: 50px 0;
    background: #fff;
  }
  .list-main{
    width: 1000px;
    margin: 0 auto;
  }
  .list-t{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .list-t ul{
    display: flex;
  }
  .list-t ul li{
    display: flex;
    align-items: center;
    margin-right: 16px;
    font-size: 14px;
    font-weight: 400;
    color: #515759;
  }
  .caret{
    display: flex;
    flex-direction: column;
  }
  .list-c{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .list-c li {
    float: left;
    margin-top: 38px;
    width: 240px;
    height: 275px;
    background: #FFFFFF;
    box-shadow: 1px 3px 3px rgba(27, 39, 94, 0.1);
    border-radius: 5px;
  }
  .list-c li img{
    width: 240px;
    height: 153px;
  }
  .course-content{
    padding: 7px 16px;
  }
  .course-content h3{
    font-size: 12px;
    color: #333333;
  }
  .course-content >div{
    padding: 7px 0;
    font-size: 12px;
    color: #808080;
  }
  .price{
    display: flex;
  }
  .price-vip{
    width: 64px;
    height: 16px;
    margin-right: 3px;
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #FF928E 0%, #FE7062 99%);
    border-radius: 16px 0px 16px 0px;
  }
  .price-total{
    font-size: 12px;
    color: #FF727F;
  }
  .list-b{
    padding-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
