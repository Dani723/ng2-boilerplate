# ng2 boilerplate

**Utilizes**
- Angular 2
- VCL
- webpack 2.1
- webpack dev server 2.1
- ng-vcl
- tslint


## Installation

```sh
npm install
```

## Development

```sh
npm run dev
```

## Building

```sh
npm run build
```

## IDE Configuration

### Vistual Studio Code

**Extensions**

- tslint
- EditorConfig for VS Code

**Typescript**

This projects uses the Typescript 2 RC. 
Install via npm
```
npm install -g typescript@rc
```
and point to the sdk in your user or workspace settings 

```json
{
  ...
  "typescript.tsdk": "/path/to/global/.npm-packages/lib/node_modules/typescript/lib",
  ... 
}
```
