// Timer API. Source C API is defined at:
// [mgos_timers.h](https://github.com/cesanta/mongoose-os/blob/master/fw/src/mgos_timers.h).

let Timer = {
  // ## **`Timer.set(milliseconds, repeat, handler)`**
  // Setup timer with `milliseconds` timeout and `handler` as a callback.
  // If `repeat` is set to true, the call will be repeated indefinitely,
  // otherwise it's a one-off.
  //
  // Return value: numeric timer ID.
  //
  // Example:
  // ```javascript
  // // Call every second
  // Timer.set(1000, true, function() {
  //   let value = GPIO.toggle(2);
  //   print(value ? 'Tick' : 'Tock');
  // }, null);
  // ```
  set: ffi('int mgos_set_timer(int,bool,void(*)(userdata),userdata)')
};
