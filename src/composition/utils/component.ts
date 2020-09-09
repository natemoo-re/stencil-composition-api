import { ReactiveEffect } from '@vue/reactivity';
import { getRenderingRef } from '@stencil/core';

interface ComponentInternalInstance {
  effects: ReactiveEffect[];
}



export let currentInstance: ComponentInternalInstance | null = null;

export const getCurrentInstance: () => ComponentInternalInstance | null = () => currentInstance || getRenderingRef();

export const setCurrentInstance = (instance: ComponentInternalInstance | null) => {
  currentInstance = instance;
};

// record effects created during a component's setup() so that they can be
// stopped when the component unmounts
export function recordInstanceBoundEffect(effect: ReactiveEffect) {
  if (currentInstance) {
    (currentInstance.effects || (currentInstance.effects = [])).push(effect);
  }
}
