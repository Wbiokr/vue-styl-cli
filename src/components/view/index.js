const Tem = require('./index.vue').default;

const View = {};

View.install = $ => {
  const Cons = $.extend(Tem);

  const MyView = new Cons();

  MyView.$mount(document.createElement('div'));

  document.body.appendChild(MyView.$el);

  $.prototype.$view = url => MyView.url = url ;
  
}

export default View;