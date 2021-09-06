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
      props.onGlobalStateChange((value, prev) => {
        console.log('-------value---------')
        $('#purehtml-container').html('Hello, render with jQuery')
      });
      return render($);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
