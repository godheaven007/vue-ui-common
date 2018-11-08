<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/vue/2.1.3/vue.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="app">
        <!--<comp>555</comp>-->
        <aaa></aaa>
    </div>
    <script>
        let Constructor = Vue.extend({
            template: `<div>{{msg}}</div>`,
            data() {
                return {
                    msg: 'hello'
                }
            },
            // props: ['name']
        });

        Vue.component('aaa', Constructor);

        var vm = new Vue({
            el: '#app'
        })
        // let comp = new Constructor({
        //     propsData: {
        //         name: 'world222'
        //     }
        // });
        //
        // comp.$mount('#app')
    </script>
</body>
</html>