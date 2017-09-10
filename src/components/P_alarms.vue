<template>
  <div class="wrap">
    <header>
      <back></back>
      <p class="title">气象预警</p>
    </header>
    <div class="content">
      <div class="alarm" v-for="alarm in this.$store.state.alarms">
        <div class="alarm-title" :style="style[alarm.alarmLevelNoDesc]">{{alarm.alarmTypeDesc}}预警</div>
        <div class="alarm-content">{{alarm.alarmContent}}</div>
        <div class="alarm-precaution" v-html="fix(alarm.precaution)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import back from '../components/back.vue'

  export default {
    name: 'alarms',
    data() {
      return {
        style: {
          "红色": 'background:#D33332',
          "蓝色": 'background:#2591EB',
          "黄色": 'background:#FAD018',
          "橙色": 'background:#ff7b1b'
        },
        test: '123'
      }
    },
    methods: {
      fix(string) {
        return string.replace(new RegExp('\n\n', 'gm'), '<br/>')
      }
    },
    components: {
      back: back
    }
  }
</script>

<style scoped>
  header {
    padding: 0.3em 1em;
    min-height: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    color: #333;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .content {
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
  }

  .alarm {
    background: rgba(255, 255, 255, 0.8);
    width: 90%;
    margin: 1rem auto;
    border-radius: 5px;
  }

  @media screen and (min-width: 720px) {
    .alarm {
      width: 45%;
    }
  }

  .alarm-title {
    border-radius: 5px 5px 0 0;
    padding: 0.5em 1em;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    overflow: hidden;
  }

  .alarm-content {
    padding: 0.5em 1em;
    text-align: left;
    line-height: 1.5;
  }

  .alarm-precaution {
    padding: 0 1em 1em 1em;
    text-align: left;
    line-height: 1.5;
  }

  .title {
    padding: 0.5em 0;
    text-align: center;
    text-indent: -2rem;
    flex: 1;
  }
</style>
