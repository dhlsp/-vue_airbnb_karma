<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 252px;">
          <div class="user-info">
            <img src="static/img/login_test.png" class="user-avator" alt="">
            <div class="user-info-cont">
              <div class="user-info-name">{{name}}</div>
              <div>{{role}}</div>
            </div>
          </div>
          <div class="user-info-list">上次登录时间：<span>2019-01-01</span></div>
          <div class="user-info-list">上次登录地点：<span>广州</span></div>
        </el-card>

        <el-card shadow="hover" style="height: 252px;">
          <div slot="header" class="clearfix">
            <span>语言详情</span>
          </div>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          Css
          <el-progress :percentage="10.2"></el-progress>
          HTML
          <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>

      <el-col :span="16">
        <el-row :gutter="20" class="mbg20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <svg-icon slot="prepend" icon-class="qq" class="grid-con-icon"/>
                <!-- <i class="el-icon-lx-people grid-con-icon"></i> -->
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>QQ访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-2">
                <!-- <i class="el-icon-lx-people grid-con-icon"></i> -->
                <svg-icon slot="prepend" icon-class="wechat" class="grid-con-icon"/>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-3">
                <svg-icon slot="prepend" icon-class="user" class="grid-con-icon"/>
                <!-- <i class="el-icon-lx-people grid-con-icon"></i> -->
                <div class="grid-cont-right">
                  <div class="grid-num">456</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-card shadow="hover" style="height: 403px;">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0;" type="text">添加</el-button>
          </div>
          <!--  -->
          <el-table :data="toboList" :show-header="false" height="304" style="width: 100%;font-size: 14px;">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}</div>
              </template>
            </el-table-column>
            <el-table-column width="120" header-align="center" align="center">
              <template slot-scope="scope">
                <el-button class="el-icon-edit" type="primary" size="small" @click="view(scope.row)"></el-button>
                <el-button class="el-icon-delete" type="danger" size="small" @click="del(scope.row)"></el-button>
                <!-- <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i> -->
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="bar" class="schart" canvasId="bar" :data="graphData" type="bar" :options="options"></schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="line" class="schart" canvasId="line" :data="graphData" type="line" :options="options2"></schart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import schart from 'vue-schart';
import bus from '@js/bus';

export default {
  name: 'HomePage',
  data() {
    return {
      name: localStorage.getItem('ms_username'),
      toboList: [{
        title: '今天要修复100个bug',
        status: false,
      },
      {
        title: '今天要修复10000个bug',
        status: false,
      },
      {
        title: '今天要修复1000个bug',
        status: false,
      },
      {
        title: '今天要修复1个bug',
        status: false,
      },
      {
        title: '今天要修复10个bug',
        status: true,
      },
      {
        title: '今天要修复10个bug',
        status: true,
      },
      {
        title: '今天要修复bug',
        status: true,
      }],
      graphData: [{
        name: '2018/12/12',
        value: 12345,
      },
      {
        name: '2018/12/13',
        value: 1526,
      },
      {
        name: '2018/12/14',
        value: 5698,
      },
      {
        name: '2018/12/15',
        value: 889,
      },
      {
        name: '2018/12/16',
        value: 15648,
      },
      {
        name: '2018/12/17',
        value: 23156,
      },
      {
        name: '2018/12/18',
        value: 25055,
      }],
      options: {
        title: '最近七天每天的用户访问量',
        showValue: false,
        fillColor: 'rgb(45, 140, 240)',
        bottomPadding: 30,
        topPadding: 30,
      },
      options2: {
        title: '最近七天用户访问趋势',
        fillColor: '#FC6FA1',
        // axisColor: '#008ACD',
        contentColor: '#EEEEEE',
        bgColor: '#F5F8FD',
        bottomPadding: 30,
        topPadding: 30,
      },
    };
  },
  created() {
    this.handleListener();
    this.changeDate();
  },
  methods: {
    changeDate() {
      const now = new Date().getTime();
      this.graphData.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      });
    },
    handleListener() {
      bus.$on('collapse', this.handleBus);
      // 调用renderChart方法对图表进行重新渲染
      window.addEventListener('resize', this.renderChart);
    },
    handleBus() {
      setTimeout(() => {
        this.renderChart();
      }, 300);
    },
    renderChart() {
      this.$refs.bar.renderChart();
      this.$refs.line.renderChart();
    },
    view() {},
    del() {},
  },
  activated() {
    this.handleListener();
  },
  computed: {
    role() {
      return this.name === 'admin' ? '超级管理员' : '普通用户';
    },
  },
  components: {
    schart,
  },
  deactivated() {
    window.removeEventListener('resize', this.renderChart);
    bus.$off('collapse', this.handleBus);
  },
};
</script>

<style scoped>
.svg-icon {
  width: 2em !important;
  height: 2em !important;
}
.el-row {
  margin-bottom: 20px;
}
/*  */
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}
.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}
.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}
.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}
.user-info-list span {
  margin-bottom: 20px;
}
/*  */
.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.grid-num {
  font-size: 50px;
  font-weight: bold;
}
.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}
.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}
.grid-con-2 .grid-num {
  color: rgb(100, 213, 114);
}
.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}
.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}
/*  */
.mgb20 {
  margin-bottom: 20px;
}
.todo-item {
  font-size: 14px;
}
.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
.schart {
  width: 100%;
  height: 300px;
}
</style>

