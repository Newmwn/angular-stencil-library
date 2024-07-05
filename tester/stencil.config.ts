import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
const angularValueAccessorBindings: ValueAccessorConfig[] = [];
export const config: Config = {
  namespace: 'tester',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'tester',
      directivesProxyFile: '../angular/projects/tester-angular/src/libs/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/tester-angular/src/libs/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      outputType: 'component',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
