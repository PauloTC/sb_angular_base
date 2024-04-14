import { CommonModule } from '@angular/common';
import { Component, Input, Directive } from '@angular/core';

@Directive({
  selector: '[dl-link]',
  standalone: true,
})
export class LinkComponent {
  /** Tipo de link sobre fondo claro u oscuro */
  @Input() variant?: 'default' | 'inverse' = 'default';

  /** Posición del icono */
  @Input() hasIcon?: 'left' | 'right' = 'left';

  /** Posición del icono */
  @Input() size: 'lg' | 'md' = 'md';

  /** Tipo de componente anchor o button */
  @Input() text = '';

  /**
   * Al pasarle una URL el componente se convierte en una etiqueta html `a`,
   * si se usa sin ella se convierte a un `button`; esto es para ser usado con
   * librerías tipo react-router.
   */
  @Input() href?: string;

  /** Target del link  */
  @Input() target?: string;

  /** Usar `true` si se necesita estado disabled */
  @Input() isDisabled?: boolean;

  /** Clases CSS opcionales que pueden ser agregadas */
  @Input() class?: string;

  public get classLink(): string[] {
    return [
      'dl-link',
      `dl-link-${this.variant}`,
      `${this.size ? `dl-link-${this.size}` : ''}`,
      `${this.hasIcon ? `dl-link-icon-${this.hasIcon}` : ''}`,
      `${this.href && this.isDisabled ? 'dl-disabled' : ''}`,
      this.class ?? '',
    ];
  }
}
