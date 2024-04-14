import { Directive, HostBinding, Input } from '@angular/core';

import { LinkIconDirection, LinkSize, LinkVariant } from './link.types';

/**
 * A convenience directive for applying styling to a `link`.
 *
 * [See demo](../../?path=/story/buttons-link--default)
 *
 * Example:
 *
 * ```html
 * <a href="#" dlLink> A link </a>
 * ```
 *
 * See the [Zeroheight docs](https://zeroheight.com/5e256e31d/v/latest/p/856441-link/b/3959bf) for more detail.
 */
@Directive({
  selector: '[dlLink]',
})
export class DlLinkDirective {
  // /** whether the component is disabled. */
  // @Input() disabled = false;

  // /** Specify the size of the button */
  // @Input() size: LinkSize = 'md';

  // /** Botones de solo iconos **/
  // @Input() variant: LinkVariant = 'default';

  // /** Botones de solo iconos **/
  // @Input() iconDirection: LinkIconDirection = 'right';

  @HostBinding('class.dl-link') get baseClass() {
    return true;
  }

  // // Class default Link
  // @HostBinding('class.dl-link-default') get defaultClass() {
  //   return this.variant === 'default';
  // }

  // // Class inverse Link
  // @HostBinding('class.dl-link-inverse') get inverseClass() {
  //   return this.variant === 'inverse';
  // }

  // // Button Sizes
  // @HostBinding('class.dl-link-lg') get largeSize() {
  //   return this.size === 'lg';
  // }

  // @HostBinding('class.dl-link-md') get mediumSize() {
  //   return this.size === 'md';
  // }

  // // Icon Direction
  // @HostBinding('class.dl-link-icon-left') get leftClass() {
  //   return this.iconDirection === 'left';
  // }

  // @HostBinding('class.dl-link-icon-right') get rightClass() {
  //   return this.iconDirection === 'right';
  // }

  // @HostBinding('class.dl-disabled') get disabledClass() {
  //   return this.disabled === true;
  // }
}
