import { Component, h, Host } from '@stencil/core';
import { computed, ref, Ref, ComputedRef } from '../../composition';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  private count: Ref<number>;
  private double: ComputedRef<number>;

  constructor() {
    this.count = ref(0);
    this.double = computed(() => this.count.value * 2);
  }

  render() {
    let { count, double } = this;
    return (
      <Host>
        <div class="counter">
          <button onClick={() => count.value--}>-</button>
          <p>{count.value}</p>
          <button onClick={() => count.value++}>+</button>
        </div>

        <ul class="meta">
          <li>
            double {double.value}
          </li>
        </ul>
      </Host>
    );
  }
}
