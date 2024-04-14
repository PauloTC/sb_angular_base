import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { DlLinkDirective } from './link.directive';
import { Component } from '@angular/core';

@Component({
  // Este componente actúa como un envoltorio para la directiva
  template: `<a href="#" dlLink>Link</a>`,
})
class WrapperComponent {}

export default {
  title: 'Buttons/ Link',
  component: WrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [DlLinkDirective, WrapperComponent], // Declara la directiva aquí
    }),
  ],
  tags: ['autodocs'],
  args: { onClick: fn() },
  parameters: {
    docs: {
      description: {
        component: `
          ## Código de uso de la directiva

          ## Ejemplo de uso en HTML

          \`\`\`html
          <a href="#" dlLink [size]="'md'" [variant]="'default'" [iconDirection]="'right'">Link</a>
          \`\`\`
        `,
      },
    },
  },
} as Meta;

export const Default = (args: any) => ({
  Component: WrapperComponent,
  props: args,
});
