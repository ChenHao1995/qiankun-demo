const render = $ => {
  $('#purehtml-container').html('Hello, render with jQuery')
  return Promise.resolve();
};

(global => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: (props) => {
      console.log(props,'purehtml mount----------');
      // props.onGlobalStateChange((value, prev) => {
      //   console.log('value----------------')
      //   document.getElementById('pure-children').innerHTML = value.childrenName
      // });
      return render($);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
