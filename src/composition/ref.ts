import { customRef, Ref } from '@vue/reactivity';
import { getRenderingRef, forceUpdate } from '@stencil/core';

function ref<T>(value: T): Ref<T> {
  let elm;
  return customRef((track, trigger) => {
    return {
      get() {
        if (!elm && typeof getRenderingRef === 'function') elm = getRenderingRef();
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        if (elm) forceUpdate(elm);
        trigger();
      },
    };
  });
}

export { ref, Ref };
