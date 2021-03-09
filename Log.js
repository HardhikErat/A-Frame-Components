// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: { // defines the property names, its types and default values => defines the shape of the data
      message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

  /*
      LifeCycle Handler Methods:
       
        init: -used to set up the initial state. 
              -called once when the component is initialized
        
        update: - modifying/updating the entity

        remove: -to undo all the previous modificaitons to the entity

        tick: - used for checking continuous changes
              - called every render loop of the scenes
  */