const emitter = {
   events: {},
   on: function(event, handler) {
      this.events[event] = handler;
   },
   
   off: function(event, handler) {
      this.events[event] = undefined;
   },
   
   emit: function(event) {
      this.events[event] && this.events[event]();
   }
}

const handler = function () {
  console.log('что-то делаем');
};

// подписали
emitter.on('event', handler);
// обработали событие
emitter.emit('event');
// отписали
emitter.off('event', handler);
// событие не обрабатывается
emitter.emit('event');