(function (factory) {
  typeof define === 'function' && define.amd ? define('index', factory) :
  factory();
}((function () { 'use strict';

  window.onload = () => {
    console.log('Hi');
    const app = Vue.createApp({
      data() {
        return {
          rows: [],
          cols: [],
          modelCols: [],
          modelRows: [],
          returnCols: [],
          returnRows: []
        };
      },

      async mounted() {
        await d3.csv("stats.csv", data => {
          if (typeof data === 'object') {
            this.rows.push(data);
          }
        });
        this.cols = Object.keys(this.rows[0]);
        await d3.csv("modelStats.csv", data => {
          if (typeof data === 'object') {
            this.modelRows.push(data);
          }
        });
        this.modelCols = Object.keys(this.modelRows[0]); // const returnData = await d3.csv("returnStats.csv", (data) => {
        //   if(typeof(data) === 'object'){
        //     this.returnRows.push(data);
        //   }
        // });
        // this.returnCols = Object.keys(this.returnRows[0]);
      },

      methods: {}
    });
    app.mount('#app');
  };

})));
